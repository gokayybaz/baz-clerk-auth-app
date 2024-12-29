"use client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from '@/components/ui/input'; // Shadcn UI Input
import { Label } from '@/components/ui/label'; // Shadcn UI Label
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'; // Shadcn UI Card Bileşenleri


export default function Home() {
  const [users, setUsers] = useState([])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => setUsers([...users, data])

  console.log(watch('example'))
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="m-10 space-y-4 w-3/12 p-6 border rounded-lg shadow-sm">
        {/* First Name Field */}
        <div className="space-y-2">
          <Label htmlFor="firstName">Ad:</Label>
          <Input
            id="firstName"
            {...register('firstName', { required: 'Ad alanı zorunludur' })}
            aria-invalid={errors.firstName ? 'true' : 'false'}
            className={errors.firstName ? 'border-red-500' : ''}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500" role="alert">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* Last Name Field */}
        <div className="space-y-2">
          <Label htmlFor="lastName">Soyad:</Label>
          <Input
            id="lastName"
            {...register('lastName', { required: 'Soyad alanı zorunludur' })}
            aria-invalid={errors.lastName ? 'true' : 'false'}
            className={errors.lastName ? 'border-red-500' : ''}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500" role="alert">
              {errors.lastName.message}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email alanı zorunludur',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Geçerli bir email adresi girin',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Ekle
        </Button>
      </form>

      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Kullanıcılar</h1>
        <hr className="mb-6" />
        <ul className="space-y-4">
          {users.map((user, index) => (
            <li key={index}>
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {user.firstName} {user.lastName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{user.email}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
