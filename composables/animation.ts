export const useTypeAnimation = (target: Ref, title: String, options: {d1: number, d2: number, timeout: number}) => {
    return useState('typeAnimation', () => {
        const default_title = target.value
        const animation = setInterval(()=> {
          let i = 1
          target.value = String(target.value).substring(0, target.value.length - 1)
          if (target.value.length == 0) {
            clearInterval(animation)
            const write = setInterval(()=> {
              if (target.value.length == title.length) {
                clearInterval(write)
                setTimeout(()=> {
                    useTypeAnimation(target, default_title, {
                        d1: 75,
                        d2: 75,
                        timeout: 1000
                    })
                }, options.timeout)
              }
              target.value = title.substring(0,i++)
            }, options.d2)
          }
        }, options.d1)
    })
}