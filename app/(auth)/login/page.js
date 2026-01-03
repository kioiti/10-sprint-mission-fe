"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/login.module.css";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <Link href="/">
                    <div className={styles.logoContainer}>
                        <Image
                            src="/header.svg"
                            alt="판다마켓 로고"
                            width={103}
                            height={103}
                        />
                        <h2 className={styles.logoText}>판다마켓</h2>
                    </div>
                </Link>
                <div className={styles.inputContainer}>
                    <h2 className={styles.inputTitle}>이메일</h2>
                    <Input 
                        placeholder="이메일을 입력해주세요." 
                        value={email}
                        onChange={setEmail}
                    />
                    <h2 className={styles.inputTitle}>비밀번호</h2>
                    <Input 
                        placeholder="비밀번호를 입력해주세요." 
                        type="password"
                        value={password}
                        onChange={setPassword}
                    />
                    <Button className={styles.loginButton}>로그인</Button>
                </div>
                <div className={styles.socialLoginContainer}>
                    <div>
                        <h3 className={styles.socialLoginTitle}>
                            간편 로그인하기
                        </h3>
                    </div>
                    <div className={styles.snsLoginButtons}>
                        <Image
                            src="/images/snslogos/google.svg"
                            alt="구글 로고"
                            width={42}
                            height={42}
                        />
                        <Image
                            src="/images/snslogos/kakao.svg"
                            alt="카카오 로고"
                            width={42}
                            height={42}
                        />
                    </div>
                </div>
                <div className={styles.signupContainer}>
                    <p className={styles.signupText}>판다마켓이 처음이신가요?</p>
                    <Link href="/signup" className={styles.signupLink}>회원가입</Link>
                </div>
            </div>
        </div>
    );
}
