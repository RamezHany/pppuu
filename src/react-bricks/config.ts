import React from 'react'
import { types } from 'react-bricks/frontend'

interface LocalLinkProps {
  href: string;
  children: React.ReactNode;
}

const config: types.ReactBricksConfig = {
  appId: '334e3aa0-6030-499e-b964-dddb74355a99',
  apiKey: 'acb8470f-6db4-43f6-b5f8-00a42d4642a2',
  pageTypes: [],
  customFields: [],
  logo: '/logo.svg',
  contentClassName: 'content',
  renderLocalLink: (props: LocalLinkProps) => {
    const { href, children } = props
    return React.createElement('a', { href }, children)
  },
  navigate: () => {},
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  useCssInJs: false,
  appRootElement: '#root',
  clickToEditSide: types.ClickToEditSide.Right,
  responsiveBreakpoints: [
    { type: types.DeviceType.Phone, width: 480, label: 'Phone' },
    { type: types.DeviceType.Tablet, width: 768, label: 'Tablet' },
    { type: types.DeviceType.Desktop, width: 1024, label: 'Desktop' },
  ],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
}

export default config
