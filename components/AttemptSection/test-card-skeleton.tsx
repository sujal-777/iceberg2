"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from "framer-motion"

interface TestCardSkeletonProps {
  index: number
}

const skeletonColors = [
  "from-blue-200 to-blue-300",
  "from-purple-200 to-purple-300",
  "from-green-200 to-green-300",
  "from-orange-200 to-orange-300",
  "from-pink-200 to-pink-300",
  "from-indigo-200 to-indigo-300",
]

export function TestCardSkeleton({ index }: TestCardSkeletonProps) {
  const colorClass = skeletonColors[index % skeletonColors.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-0 shadow-lg bg-white">
        <div className={`h-2 bg-gradient-to-r ${colorClass} animate-pulse`} />

        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-3" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-2 rounded" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-2 rounded" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-10" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-2 rounded" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-4 w-20" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Skeleton className="w-4 h-4 mr-2 rounded" />
                <Skeleton className="h-4 w-8" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-32" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
