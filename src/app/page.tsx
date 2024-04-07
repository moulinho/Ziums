"use client";
import $ from "jquery";
import "./css/style.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import layout from "./layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./lib/features/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./lib/store";
// import CLOTHING from './clothing';
export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return <div></div>;
}
