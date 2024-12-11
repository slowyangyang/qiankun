import { ElMessage, ElMessageBox } from 'element-plus'

export function globalErrorHandler(event) {
  console.log(event)

  if (typeof event === 'string') {
    ElMessage.error(event)
  } else if (event instanceof ErrorEvent) {
    if (event.error.appOrParcelName) {
      qiankunErrorHandler(event)
    } else {
      uncauhgtErrorHandler(event)
    }
  } else if (event instanceof PromiseRejectionEvent) {
    showError(event.reason.message, '预加载错误')
  }
}

function showError(content, title) {
  ElMessageBox.alert(content, title, {
    dangerouslyUseHTMLString: true,
    showClose: false,
    confirmButtonText: '我已知晓，确认关闭',
    customStyle: {
      width: '800px',
    },
  })
}

function qiankunErrorHandler(event) {
  console.log(event.error)

  const appName = event.error.appOrParcelName

  showError(
    `
  <div style="max-height: 300px; overflow: auto;">
    <p>应用名称：<b>${appName}</b></p>
    <br />
    <p>${event.message}</p>
    <br />
    <p>请将以上信息信息反馈给开发人员
    </p>
  </div>
  `,
    '加载应用错误',
  )
}

function uncauhgtErrorHandler(event) {
  showError(
    `
  <div style="max-height: 300px; overflow: auto;">
    <p>文件名：<b>${event.filename}</b></p>
    <p>报错位置：<b>(${event.lineno}, ${event.colno})</b></p>
    <br />
    <p>${event.message}</p>
    <br />
    <p>请将以上信息信息反馈给开发人员
    </p>
  </div>
  `,
    '加载应用错误',
  )
}
