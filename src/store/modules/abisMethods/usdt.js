import getContract from "@/utils/abiUtil";

function judgeToken(rootState) {
    if (!state.token) state.token = getContract.getContractByName('usdt', rootState.web3)
}

const state = {};
const mutations = {};
const actions = {
    addBlackList({rootState}, _evilUser) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.addBlackList(_evilUser).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.addBlackList(_evilUser).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "addBlackList",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    approve({rootState}, {_spender, _value}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.approve(_spender, _value).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.approve(_spender, _value).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "approve",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    deprecate({rootState}, _upgradedAddress) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.deprecate(_upgradedAddress).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.deprecate(_upgradedAddress).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "deprecate",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    destroyBlackFunds({rootState}, _blackListedUser) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.destroyBlackFunds(_blackListedUser).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.destroyBlackFunds(_blackListedUser).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "destroyBlackFunds",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    issue({rootState}, amount) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.issue(amount).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.issue(amount).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "issue",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    pause({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.pause().estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.pause().send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "pause",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    redeem({rootState}, amount) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.redeem(amount).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.redeem(amount).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "redeem",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    removeBlackList({rootState}, _clearedUser) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.removeBlackList(_clearedUser).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.removeBlackList(_clearedUser).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "removeBlackList",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    setParams({rootState}, {newBasisPoints, newMaxFee}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.setParams(newBasisPoints, newMaxFee).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.setParams(newBasisPoints, newMaxFee).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "setParams",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    transfer({rootState}, {_to, _value}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.transfer(_to, _value).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.transfer(_to, _value).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "transfer",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    transferFrom({rootState}, {_from, _to, _value}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.transferFrom(_from, _to, _value).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.transferFrom(_from, _to, _value).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "transferFrom",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    transferOwnership({rootState}, newOwner) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.transferOwnership(newOwner).estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.transferOwnership(newOwner).send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "transferOwnership",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    unpause({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.unpause().estimateGas({
                from: rootState.account,
            }).then(gas => {
                state.token.methods.unpause().send({
                    from: rootState.account,
                    gas: parseInt(gas * 1.2)
                }).then(res => {
                    let operateLogs = localStorage.getItem("operateLogs") ? JSON.parse(localStorage.getItem("operateLogs")) : []
                    operateLogs.push({
                        name: "unpause",
                        from: res.from,
                        to: res.to,
                        gasUsed: res.gasUsed,
                        blockHash: res.blockHash
                    })
                    if (operateLogs.length > 20) {
                        operateLogs.shift()
                    }
                    localStorage.setItem("operateLogs", JSON.stringify(operateLogs))
                    resolve(res)
                })
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    _totalSupply({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods._totalSupply().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    allowance({rootState}, {_owner, _spender}) {
        if(!_spender){
            _spender="0x694e3b56e0224859a7281dBFF8D77EeFD418BdAA"
        }
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.allowance(_owner, _spender).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    allowed({rootState}, {param0, param1}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.allowed(param0, param1).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    balanceOf({rootState}, who) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.balanceOf(who).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    balances({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.balances(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    basisPointsRate({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.basisPointsRate().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    decimals({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.decimals().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    deprecated({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.deprecated().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    getBlackListStatus({rootState}, _maker) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getBlackListStatus(_maker).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    getOwner({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.getOwner().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    isBlackListed({rootState}, param0) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.isBlackListed(param0).call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    MAX_UINT({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.MAX_UINT().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    maximumFee({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.maximumFee().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    name({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.name().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    owner({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.owner().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    paused({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.paused().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    symbol({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.symbol().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    totalSupply({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.totalSupply().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
    upgradedAddress({rootState}) {
        judgeToken(rootState)
        return new Promise((resolve, reject) => {
            state.token.methods.upgradedAddress().call().then(res => {
                resolve(res)
            }).catch(err => {
                reject(JSON.parse(err.message.substr(24, err.message.length)).message)
            })
        })
    },
}
export default {
    namespaced: true,
    mutations,
    state,
    actions
}
