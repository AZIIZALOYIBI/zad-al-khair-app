'use client'

import { useState, useMemo } from 'react'
import { DonorAuth } from './DonorAuth'

// بيانات المستخدمين كمثال (يمكنك جلبها من API)
const users = [
  { id: 1, email: 'ali@email.com', full_name: 'علي أحمد', user_type: 'donor', updated_at: '2025-06-10' },
  { id: 2, email: 'sara@email.com', full_name: 'سارة محمد', user_type: 'recipient', updated_at: '2025-05-20' },
  // ... المزيد من المستخدمين
]

export default function DonorAuthWithUserData() {
  // معالجة بيانات المستخدمين
  const userData = useMemo(() => {
    const processedUsers = users.map(user => ({
      ...user,
      displayName: user.full_name || user.email,
      isActive: new Date(user.updated_at) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      userTypeLabel: {
        'donor': 'متبرع',
        'recipient': 'مستفيد', 
        'admin': 'مدير'
      }[user.user_type] || 'غير محدد'
    }));
    return {
      all: processedUsers,
      donors: processedUsers.filter(u => u.user_type === 'donor'),
      recipients: processedUsers.filter(u => u.user_type === 'recipient'),
      admins: processedUsers.filter(u => u.user_type === 'admin'),
      active: processedUsers.filter(u => u.isActive),
      count: {
        total: processedUsers.length,
        donors: processedUsers.filter(u => u.user_type === 'donor').length,
        recipients: processedUsers.filter(u => u.user_type === 'recipient').length,
        admins: processedUsers.filter(u => u.user_type === 'admin').length,
        active: processedUsers.filter(u => u.isActive).length
      }
    };
  }, []);

  // منطق المصادقة (مثال)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleAuth = async (email: string, password: string, userType: string) => {
    setIsLoading(true)
    // هنا تضع منطق المصادقة الحقيقي
    setTimeout(() => {
      setIsLoading(false)
      setMessage('تم تسجيل الدخول بنجاح')
    }, 1000)
  }

  return (
    <div>
      <DonorAuth onAuth={handleAuth} isLoading={isLoading} message={message} />
      {/* مثال على استخدام بيانات المستخدمين */}
      <div className="mt-8 text-center text-gray-700">
        <p>عدد المتبرعين: {userData.count.donors}</p>
        <p>عدد النشطين: {userData.count.active}</p>
      </div>
    </div>
  )
}