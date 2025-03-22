"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function IsUser() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) router.push("/login");
    }, []);

    return null;
}

function IsGuest() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) router.push("/");
    }, []);

    return null;
}

export { IsUser, IsGuest };