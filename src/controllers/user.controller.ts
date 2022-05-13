import express, { Request, Response } from "express";
import { connect } from "../../config/database";
import { User } from "../../interfaces/user.interface";

export const getAllUsers = async (req: Request, res: Response) => {
  const conn = await connect();
  const users = await conn.query("SELECT * FROM users");
  return res.json({
    message: "List of users",
    data: users[0],
  });
};
export const getUserById = async (req: Request, res: Response) => {
  const conn = await connect();
  const { id } = req.params;
  const user = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
  return res.json({
    message: "User found",
    data: user[0],
  });
};
export const createUser = async (req: Request, res: Response) => {
  const conn = await connect();
  const user: User = req.body;
  await conn.query("INSERT INTO users SET ?", [user]);
  return res.json({
    message: "true",
    data: "User created",
  });
};
export const updateUser = async (req: Request, res: Response) => {
  const conn = await connect();
  const { id } = req.params;
  const user: User = req.body;
  await conn.query("UPDATE users SET ? WHERE id = ?", [user, id]);
  return res.json({
    message: "true",
    data: "User updated",
  });
};
export const deleteUser = async (req: Request, res: Response) => {
  const conn = await connect();
  const { id } = req.params;
  await conn.query("DELETE FROM users WHERE id = ?", [id]);
  return res.json({
    message: "true",
    data: "User deleted",
  });
};
