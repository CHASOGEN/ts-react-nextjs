// import { ComponentMeta } from '@storybook/react'
import { Meta } from '@storybook/react'
import { StyledButton, StyledButtonProps } from '../components/StyleButton'

// ファイル内の Story の設定(メタデータオブジェクト)
export default {
    // グループ名
    title: 'StyledButton',
    // 使用するコンポーネント
    component: StyledButton,
} as Meta<typeof StyledButton>

export const Primary = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
        </StyledButton>
    )
}

export const Success = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = (props: StyledButtonProps) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}