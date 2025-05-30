"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function ContactPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        inquiryType: '',
        name: '',
        email: '',
        category: '',
        content: '',
        phone: '',
        company: '',
        preferredContact: 'email',
        privacyPolicy: false
    });

    const resetForm = () => {
        setFormData({
            inquiryType: '',
            name: '',
            email: '',
            category: '',
            content: '',
            phone: '',
            company: '',
            preferredContact: 'email',
            privacyPolicy: false
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const form = e.target as HTMLFormElement;
            const formData = new FormData(form);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as URLSearchParams).toString()
            });

            if (response.ok) {
                alert('お問い合わせを受け付けました。担当者より折り返しご連絡いたします。');
                resetForm();
                router.push('/contact?status=success');
            } else {
                throw new Error('送信に失敗しました');
            }
        } catch (error) {
            alert('申し訳ありません。送信に失敗しました。時間をおいて再度お試しください。');
            console.error('Form submission error:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
        }));
    };

    return (
        <main className="max-w-[1024px] mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--theme-1)] to-[var(--theme-2)] text-transparent bg-clip-text">お問い合わせ</h1>
                <p className="text-gray-600">ご質問・ご相談など、お気軽にお問い合わせください。</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 transform transition-transform duration-300">
                    <h2 className="text-2xl font-semibold mb-6 text-[var(--theme-1)]">よくある質問</h2>
                    <div className="space-y-4">
                        <details className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <summary className="font-medium cursor-pointer flex items-center">
                                <span className="mr-2">📋</span>
                                サービスについて
                            </summary>
                            <p className="mt-3 text-gray-600 pl-6">各サービスの詳細は事業内容ページをご覧ください。</p>
                        </details>
                        <details className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <summary className="font-medium cursor-pointer flex items-center">
                                <span className="mr-2">💰</span>
                                料金について
                            </summary>
                            <p className="mt-3 text-gray-600 pl-6">料金は案件ごとに異なります。お見積りをご希望の場合は、お問い合わせください。</p>
                        </details>
                        <details className="bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                            <summary className="font-medium cursor-pointer flex items-center">
                                <span className="mr-2">⏱️</span>
                                開発期間について
                            </summary>
                            <p className="mt-3 text-gray-600 pl-6">プロジェクトの規模や要件により異なります。詳細はお問い合わせください。</p>
                        </details>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-[var(--theme-1)]">お問い合わせフォーム</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-6"
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                何についてのお問い合わせですか？
                            </label>
                            <select
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                required
                            >
                                <option value="">選択してください</option>
                                <option value="service">サービスについて</option>
                                <option value="price">料金について</option>
                                <option value="development">開発期間について</option>
                                <option value="other">その他</option>
                            </select>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    お名前 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    会社名
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    メールアドレス <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    電話番号
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                カテゴリ <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                required
                            >
                                <option value="">選択してください</option>
                                <option value="web-dev">Webアプリ・サイト制作</option>
                                <option value="outsourcing">プログラム委託業務</option>
                                <option value="mahjong-app">麻雀アプリ開発</option>
                                <option value="platform-creation">プラットフォーム制作</option>
                                <option value="sns-management">SNS運用代行</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                お問い合わせ内容 <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={6}
                                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--theme-1)] focus:border-transparent transition-all duration-200"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ご希望の連絡方法
                            </label>
                            <div className="flex space-x-6">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="email"
                                        checked={formData.preferredContact === 'email'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-[var(--theme-1)] focus:ring-[var(--theme-1)]"
                                    />
                                    <span className="ml-2">メール</span>
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="phone"
                                        checked={formData.preferredContact === 'phone'}
                                        onChange={handleChange}
                                        className="w-4 h-4 text-[var(--theme-1)] focus:ring-[var(--theme-1)]"
                                    />
                                    <span className="ml-2">電話</span>
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="privacyPolicy"
                                    checked={formData.privacyPolicy}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 text-[var(--theme-1)] focus:ring-[var(--theme-1)] rounded"
                                    required
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    プライバシーポリシーに同意します <span className="text-red-500">*</span>
                                </span>
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[var(--theme-1)] to-[var(--theme-2)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity duration-200 transform hover:scale-105 shadow-lg"
                            >
                                送信する
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}