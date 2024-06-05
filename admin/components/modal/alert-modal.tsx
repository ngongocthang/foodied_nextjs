"use client"

import { useEffect, useState } from "react"
import { Modal } from "@/components/modal"
import { Button } from "@/components/ui/button"

interface AlertModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    loading: boolean
}

export const AlertModal = ({
    isOpen, onClose, onConfirm, loading
} : AlertModalProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return(
        <Modal title="Are you sure ? " descripton="This action cannot be undone!.." isOpen={isOpen} onClose={onClose}>
            <div className=" pt-6 space-x-2 flex items-center justify-center w-full">
                <Button disabled={loading} variant={"outline"} onClick={onClose}>
                    Cancel
                </Button>
                <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
                    Confirm
                </Button>
            </div>
        </Modal>
    )
}