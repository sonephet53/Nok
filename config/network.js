// Network configuration
export const NETWORK_CONFIG = {
  // เปลี่ยน IP นี้เป็น IP ของคอมคุณ
  LOCAL_IP: '192.168.1.100', // <-- ใส่ IP จริงของคุณที่นี่
  DEV_PORT: 5173,
  PREVIEW_PORT: 4173,
  
  // Auto-detect network URLs
  getLocalUrl: () => {
    const isDev = import.meta.env.DEV
    const port = isDev ? NETWORK_CONFIG.DEV_PORT : NETWORK_CONFIG.PREVIEW_PORT
    return `http://${NETWORK_CONFIG.LOCAL_IP}:${port}/Noy/`
  },
  
  // สำหรับแสดงใน UI
  getQRCodeUrl: () => {
    return NETWORK_CONFIG.getLocalUrl()
  }
}

// Helper function to get current IP (for display only)
export const getCurrentNetworkInfo = () => {
  return {
    localUrl: NETWORK_CONFIG.getLocalUrl(),
    ip: NETWORK_CONFIG.LOCAL_IP,
    port: import.meta.env.DEV ? NETWORK_CONFIG.DEV_PORT : NETWORK_CONFIG.PREVIEW_PORT
  }
}