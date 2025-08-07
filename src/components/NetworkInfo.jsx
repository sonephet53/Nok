import { getCurrentNetworkInfo } from '../config/network'

function NetworkInfo() {
  const networkInfo = getCurrentNetworkInfo()
  
  // แสดงเฉพาะใน development mode
  if (!import.meta.env.DEV) {
    return null
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('คัดลอกแล้ว!')
    })
  }

  return (
    <div className="fixed bottom-4 left-4 bg-black/80 text-white p-4 rounded-lg text-sm z-50">
      <h3 className="font-bold mb-2">📱 Mobile Access</h3>
      <div className="space-y-2">
        <div>
          <span className="text-gray-300">IP:</span> 
          <span className="ml-2 font-mono">{networkInfo.ip}</span>
        </div>
        <div>
          <span className="text-gray-300">Port:</span> 
          <span className="ml-2 font-mono">{networkInfo.port}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-300">URL:</span>
          <button 
            onClick={() => copyToClipboard(networkInfo.localUrl)}
            className="text-blue-400 hover:text-blue-300 font-mono text-xs bg-gray-800 px-2 py-1 rounded"
          >
            {networkInfo.localUrl} 📋
          </button>
        </div>
      </div>
    </div>
  )
}

export default NetworkInfo