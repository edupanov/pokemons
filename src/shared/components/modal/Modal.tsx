import React, {FC, ReactElement, ReactNode, useEffect} from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'
import {Button} from '@material-ui/core'

interface ModalProps {
    open: boolean
    children: ReactElement & ReactNode
    onClose: Function
    onAccept?: Function
    zIndex?: number
    isOverlayTransparent?: boolean
    classNameWrapper?: string
    disabledAcceptModal?: any
    disabledButtonAccept?: boolean
    width?: number | string
    nameClose?: string
    nameAccept?: string
    onCloseFoo?: Function
}

const Modal: FC<ModalProps> = ({
                                   open,
                                   children,
                                   onClose,
                                   onAccept,
                                   zIndex,
                                   isOverlayTransparent,
                                   classNameWrapper,
                                   disabledAcceptModal,
                                   width,
                                   disabledButtonAccept,
                                   nameAccept, nameClose, onCloseFoo
                               }: ModalProps) => {

        if (!open) return null

        useEffect(() => {
            document.body.style.overflow = 'hidden'
        }, [])

        const onCloseModal = () => {
            onClose(false)
            if (!isOverlayTransparent) {
                document.body.style.overflow = 'visible'
            }
        }
        const onAcceptModal = () => {
            if (typeof onAccept === "function") onAccept()
            onClose(false)
            if (!isOverlayTransparent) {
                document.body.style.overflow = 'visible'
            }
        }
        return ReactDOM.createPortal(
            <div style={{zIndex: zIndex || 1000}}>
                <div className={!isOverlayTransparent ? styles.ModalOverlay : styles.ModalTransparentOverlay}
                     onClick={onCloseModal}/>
                <div
                    className={`${!isOverlayTransparent ? styles.ModalWrapper : styles.ModalNestedWrapper} ${classNameWrapper}`}
                    >
                    {children}
                    <div
                        className={typeof onAccept === "function" ? styles.ButtonRow : `${styles.ButtonRow} ${styles.ButtonRowWithoutAction}`}>
                        <Button variant="outlined"
                                color={"secondary"}
                                onClick={() => {
                                    onCloseFoo && onCloseFoo()
                                    onCloseModal()
                                }}>
                            {nameAccept ?? "Close"}
                        </Button>
                        {
                            typeof onAccept === "function" && !disabledButtonAccept && <Button
                                variant="outlined"
                                color={"primary"}
                                style={{marginLeft: 10}}
                                disabled={disabledAcceptModal}
                                onClick={onAcceptModal}>
                                {nameClose ?? "Apply"}

                            </Button>
                        }
                    </div>
                </div>
            </div>,
            document.getElementById('modal-portal') as HTMLElement
        )
    }
;

export default Modal
