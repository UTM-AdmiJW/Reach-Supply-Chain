// Automatically generated with Reach 0.1.12 (ae94865f)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (ae94865f)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['name', ctc0], ['buyerAddress', ctc1], ['supplierAddress', ctc1], ['state', ctc2]]);
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  
  const Explorer_deliveredNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v258;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_deployedNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v258;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_details = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v257;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_listOfIngredients = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v283;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_rejectReason = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        const v267 = 'Too salty. I Reject                                                                                                             ';
        
        return v267;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_reviewedNetworkTime = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v258;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const Explorer_state = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v257, v258, v265, v282, v283] = svs;
      return (await ((async () => {
        
        
        return v265;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Explorer: {
        deliveredNetworkTime: {
          decode: Explorer_deliveredNetworkTime,
          dom: [],
          rng: ctc2
          },
        deployedNetworkTime: {
          decode: Explorer_deployedNetworkTime,
          dom: [],
          rng: ctc2
          },
        details: {
          decode: Explorer_details,
          dom: [],
          rng: ctc3
          },
        listOfIngredients: {
          decode: Explorer_listOfIngredients,
          dom: [],
          rng: ctc5
          },
        rejectReason: {
          decode: Explorer_rejectReason,
          dom: [],
          rng: ctc0
          },
        reviewedNetworkTime: {
          decode: Explorer_reviewedNetworkTime,
          dom: [],
          rng: ctc2
          },
        state: {
          decode: Explorer_state,
          dom: [],
          rng: ctc2
          }
        }
      },
    views: {
      3: [ctc3, ctc2, ctc2, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['name', ctc0], ['buyerAddress', ctc1], ['supplierAddress', ctc1], ['state', ctc2]]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Contract;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  
  
  const v249 = stdlib.protect(ctc3, interact.details, 'for Buyer\'s interact field details');
  
  const txn1 = await (ctc.sendrecv({
    args: [v249],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:60:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:60:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v257], secs: v259, time: v258, didSend: v31, from: v256 } = txn1;
      
      ;
      const v260 = await ctc.getContractInfo();
      
      const v265 = v257.state;
      const v281 = [v260, v260, v260, v260, v260, v260, v260, v260, v260, v260];
      const v282 = stdlib.checkedBigNumberify('./index.rsh:86:51:decimal', stdlib.UInt_max, '0');
      const v283 = v281;
      const v284 = v258;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v257], secs: v259, time: v258, didSend: v31, from: v256 } = txn1;
  ;
  const v260 = await ctc.getContractInfo();
  stdlib.protect(ctc4, await interact.launched(v260), {
    at: './index.rsh:62:28:application',
    fs: ['at ./index.rsh:62:28:application call to [unknown function] (defined at: ./index.rsh:62:28:function exp)', 'at ./index.rsh:62:28:application call to "liftedInteract" (defined at: ./index.rsh:62:28:application)'],
    msg: 'launched',
    who: 'Buyer'
    });
  
  const v265 = v257.state;
  const v281 = [v260, v260, v260, v260, v260, v260, v260, v260, v260, v260];
  let v282 = stdlib.checkedBigNumberify('./index.rsh:86:51:decimal', stdlib.UInt_max, '0');
  let v283 = v281;
  let v284 = v258;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v334], secs: v336, time: v335, didSend: v192, from: v333 } = txn3;
    undefined /* setApiDetails */;
    const v338 = v334[stdlib.checkedBigNumberify('./index.rsh:92:14:spread', stdlib.UInt_max, '0')];
    const v339 = stdlib.lt(v282, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '10'));
    stdlib.assert(v339, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:93:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)'],
      msg: 'Number of ingredients cannot exceed 10',
      who: 'Buyer'
      });
    ;
    const v345 = null;
    await txn3.getOutput('Seller_addIngredient', 'v345', ctc4, v345);
    const v353 = stdlib.Array_set(v283, v282, v338);
    const v354 = stdlib.safeAdd(v282, stdlib.checkedBigNumberify('./index.rsh:97:76:decimal', stdlib.UInt_max, '1'));
    const cv282 = v354;
    const cv283 = v353;
    const cv284 = v335;
    
    v282 = cv282;
    v283 = cv283;
    v284 = cv284;
    
    txn2 = txn3;
    continue;
    
    }
  return;
  
  
  };
export async function _Seller_addIngredient3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Seller_addIngredient3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Seller_addIngredient3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['name', ctc0], ['buyerAddress', ctc1], ['supplierAddress', ctc1], ['state', ctc2]]);
  const ctc4 = stdlib.T_Contract;
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'));
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v257, v258, v265, v282, v283] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc3, ctc2, ctc2, ctc2, ctc5]);
  const v322 = stdlib.protect(ctc6, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)'],
    msg: 'in',
    who: 'Seller_addIngredient'
    });
  const v325 = stdlib.lt(v282, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v325, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)'],
    msg: 'Number of ingredients cannot exceed 10',
    who: 'Seller_addIngredient'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v257, v258, v265, v282, v283, v322],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:95:22:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v334], secs: v336, time: v335, didSend: v192, from: v333 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Seller_addIngredient"
        });
      const v338 = v334[stdlib.checkedBigNumberify('./index.rsh:92:14:spread', stdlib.UInt_max, '0')];
      ;
      const v345 = null;
      const v346 = await txn1.getOutput('Seller_addIngredient', 'v345', ctc7, v345);
      
      const v353 = stdlib.Array_set(v283, v282, v338);
      const v354 = stdlib.safeAdd(v282, stdlib.checkedBigNumberify('./index.rsh:97:76:decimal', stdlib.UInt_max, '1'));
      const v438 = v354;
      const v439 = v353;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc2, ctc2, ctc2, ctc5, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v334], secs: v336, time: v335, didSend: v192, from: v333 } = txn1;
  undefined /* setApiDetails */;
  const v338 = v334[stdlib.checkedBigNumberify('./index.rsh:92:14:spread', stdlib.UInt_max, '0')];
  const v339 = stdlib.lt(v282, stdlib.checkedBigNumberify('./index.rsh:93:28:decimal', stdlib.UInt_max, '10'));
  stdlib.assert(v339, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:93:18:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)', 'at ./index.rsh:92:49:application call to [unknown function] (defined at: ./index.rsh:92:49:function exp)'],
    msg: 'Number of ingredients cannot exceed 10',
    who: 'Seller_addIngredient'
    });
  ;
  const v345 = null;
  const v346 = await txn1.getOutput('Seller_addIngredient', 'v345', ctc7, v345);
  if (v192) {
    stdlib.protect(ctc7, await interact.out(v334, v346), {
      at: './index.rsh:92:15:application',
      fs: ['at ./index.rsh:92:15:application call to [unknown function] (defined at: ./index.rsh:92:15:function exp)', 'at ./index.rsh:96:20:application call to "ret" (defined at: ./index.rsh:95:30:function exp)', 'at ./index.rsh:95:30:application call to [unknown function] (defined at: ./index.rsh:95:30:function exp)'],
      msg: 'out',
      who: 'Seller_addIngredient'
      });
    }
  else {
    }
  
  const v353 = stdlib.Array_set(v283, v282, v338);
  const v354 = stdlib.safeAdd(v282, stdlib.checkedBigNumberify('./index.rsh:97:76:decimal', stdlib.UInt_max, '1'));
  const v438 = v354;
  const v439 = v353;
  return;
  
  
  
  };
export async function Seller_addIngredient(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller_addIngredient expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller_addIngredient expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _Seller_addIngredient3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Seller_addIngredient(uint64)byte[0]`],
    pure: [`Explorer_deliveredNetworkTime()uint64`, `Explorer_deployedNetworkTime()uint64`, `Explorer_details()(byte[128],address,address,uint64)`, `Explorer_listOfIngredients()uint64[10]`, `Explorer_rejectReason()byte[128]`, `Explorer_reviewedNetworkTime()uint64`, `Explorer_state()uint64`],
    sigs: [`Explorer_deliveredNetworkTime()uint64`, `Explorer_deployedNetworkTime()uint64`, `Explorer_details()(byte[128],address,address,uint64)`, `Explorer_listOfIngredients()uint64[10]`, `Explorer_rejectReason()byte[128]`, `Explorer_reviewedNetworkTime()uint64`, `Explorer_state()uint64`, `Seller_addIngredient(uint64)byte[0]`]
    },
  appApproval: `ByAMAAMBCIG8jOUHxOaxjw2ZxPiSDf3psbgIlqf0sQXswZ3kBreeyo0FAiYEAQABAQECACI1ADEYQQMDK2RJIls1ASVbNQI2GgAXSUEBfiI1BCQ1BkkhBAxAAPpJIQUMQAA/SSEGDEAAHCEGEkQ0ASMSRChkKWRQKmRQSTUDV8gINQdCArEhBRJENAEjEkQoZClkUCpkUEk1A1fICDUHQgKVSSEHDEAAHCEHEkQ0ASMSRChkKWRQKmRQSTUDV9AINQdCAnIhBBJENAEjEkSAgAFUb28gc2FsdHkuIEkgUmVqZWN0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADUHQgHhSSEIDEAAP0khCQxAABwhCRJENAEjEkQoZClkUCpkUEk1A1cAyDUHQgG3IQgSRDQBIxJEKGQpZFAqZFBJNQNX4FA1B0IBm0khCgxAAAohChJENhoBQgA4geXe4q4DEkQ0ASMSRChkKWRQKmRQSTUDV8gINQdCAWo2GgIXNQQ2GgM2GgEXSSELDEAAbiELEkQjNAESRDQESSISTDQCEhFEKGQpZFAqZFBJNQOB2AFbNf9JNQU1/oAEHIZP5TT+ULA0/4EKDESACAAAAAAAAAFZsCs1BzQDVwDINAOByAFbNAOB0AFbNP8kCDQDV+BQNP8lCzT+XTIGQgBkIhJEgaCNBogBBCI0ARJENARJIhJMNAISEURJNQU1/4AEHdBcOjT/ULAxGDX+NP8yBjT/gcABWyI0/hY0/hZQNP4WUDT+FlA0/hZQNP4WUDT+FlA0/hZQNP4WUDT+FlAyBkIAADX/Nf41/TX8NftJNfo0+xZQNPwWUDT9FlA0/lAoSwFXAH9nKUsBV39/ZypLAVf+MmdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggkshAyCbIJMgqyB7NCAAUxGSISRCs0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSQIMgQSRDEWEkQkQzEZIhJEQv/fIjE0EkSBBDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiQINQA4BzIKEkQ4ECQSRDgIEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 304,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "buyerAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "supplierAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "state",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v257",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "bytes32",
                        "name": "elem0",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem1",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem2",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem3",
                        "type": "bytes32"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "name",
                    "type": "tuple"
                  },
                  {
                    "internalType": "address payable",
                    "name": "buyerAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "supplierAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "state",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T2",
                "name": "v257",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v334",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v345",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Explorer_deliveredNetworkTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_deployedNetworkTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_details",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T1",
            "name": "name",
            "type": "tuple"
          },
          {
            "internalType": "address payable",
            "name": "buyerAddress",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "supplierAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "state",
            "type": "uint256"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_listOfIngredients",
    "outputs": [
      {
        "internalType": "address payable[10]",
        "name": "",
        "type": "address[10]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_rejectReason",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "internalType": "struct T1",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_reviewedNetworkTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Explorer_state",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "Seller_addIngredient",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "elem0",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v334",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620019b4380380620019b48339810160408190526200002691620004c3565b60008055436003556200003862000216565b7f9ae602065b7e32db5a7014cc1366eaa50adc6516c784165ac6c2858b34c4bdc033836040516200006b92919062000598565b60405180910390a1620000813415600e6200016e565b308082526020808301805192909252825182516001600160a01b039182169201919091528251825190821660409091015282518251908216606090910152825182519082166080909101528251825190821660a0909101528251825190821660c0909101528251825190821660e0909101528251825190821661010090910152825191519116610120909101526200011862000240565b602080840180515183515282514390830181905290515160600151835160409081019190915283830180516000905285840151815190940193909352915190910152620001658162000198565b50505062000703565b81620001945760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620001a2620002ad565b8151518152815160209081015181830152825160409081015181840152818401805151606085015251820151608084015260036000554360015551620001eb9183910162000616565b60405160208183030381529060405260029080519060200190620002119291906200031f565b505050565b604051806040016040528060006001600160a01b031681526020016200023b620003ae565b905290565b604080516101a0810182526000610120820181815261014083018290526101608301829052610180830182905260a0830190815260c0830182905260e083018290526101008301829052928201928352606082018190526080820152908152602081016200023b620003cd565b604080516101a081019091526000610120820181815261014083018290526101608301829052610180830182905260a0830190815260c0830182905260e08301829052610100830191909152819081526020016000815260200160008152602001600081526020016200023b620003ae565b8280546200032d90620006c6565b90600052602060002090601f0160209004810192826200035157600085556200039c565b82601f106200036c57805160ff19168380011785556200039c565b828001600101855582156200039c579182015b828111156200039c5782518255916020019190600101906200037f565b50620003aa929150620003f6565b5090565b604051806101400160405280600a906020820280368337509192915050565b604051806060016040528060008152602001620003e9620003ae565b8152602001600081525090565b5b80821115620003aa5760008155600101620003f7565b604080519081016001600160401b03811182821017156200043e57634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b03811182821017156200043e57634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b03811182821017156200043e57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620004be57600080fd5b919050565b6000818303610100811215620004d857600080fd5b620004e26200040d565b83518152601f198201915060e0821215620004fc57600080fd5b6200050662000444565b6200051062000475565b60808412156200051f57600080fd5b6200052962000475565b9350602086015184526040860151602085015260608601516040850152608086015160608501528381526200056160a08701620004a6565b60208201526200057460c08701620004a6565b604082015260e0959095015160608601529384526020810193909352509092915050565b60006101208201905060018060a01b03841682528251602083015260208301516200060e604084018251805180518352602080820151818501526040808301518186015260609283015183860152908301516001600160a01b039081166080860152908301511660a0840152015160c090910152565b509392505050565b8151805180518352602080820151818501526040808301518186015260609283015183860152908301516001600160a01b039081166080860152908301511660a0840152015160c0820152610280810160208084015160e0840152604084015161010084015260608401516101208401526080840151610140840160005b600a811015620006bc5782516001600160a01b03168252918301919083019060010162000694565b5050505092915050565b600181811c90821680620006db57607f821691505b60208210811415620006fd57634e487b7160e01b600052602260045260246000fd5b50919050565b6112a180620007136000396000f3fe6080604052600436106100a55760003560e01c80638e4ad75f116100615780638e4ad75f14610157578063ab53f2c614610179578063bd7ce4101461019c578063c016489f146101b1578063dae16031146101d4578063efb34933146101e957005b8063196c99be146100ae5780631e93b0f1146100d957806369afda47146100f857806373e758ed1461010b57806379a7e9b71461012d578063832307571461014257005b366100ac57005b005b3480156100ba57600080fd5b506100c36101fe565b6040516100d09190610d85565b60405180910390f35b3480156100e557600080fd5b506003545b6040519081526020016100d0565b6100ac610106366004610db0565b610231565b34801561011757600080fd5b5061012061025c565b6040516100d09190610e20565b34801561013957600080fd5b506100ea61026f565b34801561014e57600080fd5b506001546100ea565b34801561016357600080fd5b5061016c61027b565b6040516100d09190610e2e565b34801561018557600080fd5b5061018e61028e565b6040516100d0929190610e69565b3480156101a857600080fd5b506100ea61032b565b6101c46101bf366004610ede565b610337565b60405190151581526020016100d0565b3480156101e057600080fd5b506100ea610348565b3480156101f557600080fd5b506100ea610354565b60408051608081018252600080825260208201819052918101829052606081018290529061022b81610360565b91505090565b60408051602081019091526000815261025861025236849003840184610f87565b826104ab565b5050565b610264610bb5565b600061022b816106a1565b60008061022b81610768565b610283610bf8565b600061022b8161082c565b6000606060005460028080546102a390611009565b80601f01602080910402602001604051908101604052809291908181526020018280546102cf90611009565b801561031c5780601f106102f15761010080835404028352916020019161031c565b820191906000526020600020905b8154815290600101906020018083116102ff57829003601f168201915b50505050509050915091509091565b60008061022b816108f6565b60006103428261091e565b92915050565b60008061022b81610952565b60008061022b8161097a565b604080516080810182526000808252602082018190529181018290526060810182905290546003141561049a5760006002805461039c90611009565b80601f01602080910402602001604051908101604052809291908181526020018280546103c890611009565b80156104155780601f106103ea57610100808354040283529160200191610415565b820191906000526020600020905b8154815290600101906020018083116103f857829003601f168201915b505050505080602001905181019061042d91906110c0565b905061045d6040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b805172151bdbc81cd85b1d1e4b88124814995a9958dd606a1b90528051600060209091018190528151604001819052815160600152519392505050565b6104a66000600b610a3a565b919050565b6104bb6003600054146011610a3a565b81516104d69015806104cf57508251600154145b6012610a3a565b6000808055600280546104e890611009565b80601f016020809104026020016040519081016040528092919081815260200182805461051490611009565b80156105615780601f1061053657610100808354040283529160200191610561565b820191906000526020600020905b81548152906001019060200180831161054457829003601f168201915b505050505080602001905181019061057991906110c0565b60408051338152855160208083019190915286015151516001600160a01b03168183015290519192507f397fbf74ee760faaaf416e26711cae0f761d205a28047865f4cb3b3fdc062bbc919081900360600190a16105df600a826060015110600f610a3a565b6105eb34156010610a3a565b604051600081527f93d62f347ccd035f8801347eec0bcb863109562876eb27c10466e9edffc3980d9060200160405180910390a16000825261062b610c1c565b81518151526020808301518251909101526040808301518251909101526060820151610658906001610a60565b602080830151919091526080830151606084015191860151515161067c9290610aad565b6020808301805190910191909152514360409091015261069b81610b3d565b50505050565b6106a9610bb5565b6003600054141561075c576000600280546106c390611009565b80601f01602080910402602001604051908101604052809291908181526020018280546106ef90611009565b801561073c5780601f106107115761010080835404028352916020019161073c565b820191906000526020600020905b81548152906001019060200180831161071f57829003601f168201915b505050505080602001905181019061075491906110c0565b519392505050565b6104a660006009610a3a565b6000600360005414156108205760006002805461078490611009565b80601f01602080910402602001604051908101604052809291908181526020018280546107b090611009565b80156107fd5780601f106107d2576101008083540402835291602001916107fd565b820191906000526020600020905b8154815290600101906020018083116107e057829003601f168201915b505050505080602001905181019061081591906110c0565b602001519392505050565b6104a66000600c610a3a565b610834610bf8565b600360005414156108ea5760006002805461084e90611009565b80601f016020809104026020016040519081016040528092919081815260200182805461087a90611009565b80156108c75780601f1061089c576101008083540402835291602001916108c7565b820191906000526020600020905b8154815290600101906020018083116108aa57829003601f168201915b50505050508060200190518101906108df91906110c0565b608001519392505050565b6104a66000600a610a3a565b6000600360005414156109125760006002805461078490611009565b6104a660006008610a3a565b6000610928610c3c565b602080820151516001600160a01b03851690526040805191820190526000815261075482826104ab565b60006003600054141561096e5760006002805461078490611009565b6104a660006007610a3a565b600060036000541415610a325760006002805461099690611009565b80601f01602080910402602001604051908101604052809291908181526020018280546109c290611009565b8015610a0f5780601f106109e457610100808354040283529160200191610a0f565b820191906000526020600020905b8154815290600101906020018083116109f257829003601f168201915b5050505050806020019051810190610a2791906110c0565b604001519392505050565b6104a66000600d5b816102585760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600082610a6d83826111b0565b91508110156103425760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610a57565b610ab5610bf8565b60005b600a811015610b0f578481600a8110610ad357610ad36111c8565b60200201518282600a8110610aea57610aea6111c8565b6001600160a01b03909216602092909202015280610b07816111de565b915050610ab8565b50818184600a8110610b2357610b236111c8565b6001600160a01b0390921660209290920201529392505050565b610b45610c69565b8151518152815160209081015181830152825160409081015181840152818401805151606085015251820151608084015260036000554360015551610b8c918391016111f9565b60405160208183030381529060405260029080519060200190610bb0929190610c9e565b505050565b604080516101008101825260006080820181815260a0830182905260c0830182905260e08301829052825260208201819052918101829052606081019190915290565b604051806101400160405280600a906020820280368337509192915050565b905290565b6040518060400160405280610c2f610d22565b8152602001610c17610d49565b604051806040016040528060008152602001610c1760408051808201909152600060208201908152815290565b6040518060a00160405280610c7c610bb5565b8152602001600081526020016000815260200160008152602001610c17610bf8565b828054610caa90611009565b90600052602060002090601f016020900481019282610ccc5760008555610d12565b82601f10610ce557805160ff1916838001178555610d12565b82800160010185558215610d12579182015b82811115610d12578251825591602001919060010190610cf7565b50610d1e929150610d70565b5090565b6040518060600160405280610d35610bb5565b815260200160008152602001600081525090565b604051806060016040528060008152602001610d63610bf8565b8152602001600081525090565b5b80821115610d1e5760008155600101610d71565b8151815260208083015190820152604080830151908201526060808301519082015260808101610342565b600060408284031215610dc257600080fd5b50919050565b610df4828251805182526020810151602083015260408101516040830152606081015160608301525050565b60208101516001600160a01b03908116608084015260408201511660a08301526060015160c090910152565b60e081016103428284610dc8565b6101408101818360005b600a811015610e605781516001600160a01b0316835260209283019290910190600101610e38565b50505092915050565b82815260006020604081840152835180604085015260005b81811015610e9d57858101830151858201606001528201610e81565b81811115610eaf576000606083870101525b50601f01601f191692909201606001949350505050565b6001600160a01b0381168114610edb57600080fd5b50565b600060208284031215610ef057600080fd5b8135610efb81610ec6565b9392505050565b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610f3b57610f3b610f02565b60405290565b60405160a0810167ffffffffffffffff81118282101715610f3b57610f3b610f02565b6040516080810167ffffffffffffffff81118282101715610f3b57610f3b610f02565b60008183036040811215610f9a57600080fd5b6040516040810181811067ffffffffffffffff82111715610fbd57610fbd610f02565b604052833581526020601f1983011215610fd657600080fd5b610fde610f18565b9150610fe8610f18565b6020850135610ff681610ec6565b8152825260208101919091529392505050565b600181811c9082168061101d57607f821691505b60208210811415610dc257634e487b7160e01b600052602260045260246000fd5b80516104a681610ec6565b600082601f83011261105a57600080fd5b60405161014080820182811067ffffffffffffffff8211171561107f5761107f610f02565b6040528301818582111561109257600080fd5b845b828110156110b55780516110a781610ec6565b825260209182019101611094565b509195945050505050565b60008183036102808112156110d457600080fd5b6110dc610f41565b60e08212156110ea57600080fd5b6110f2610f64565b608083121561110057600080fd5b611108610f64565b92508451835260208501516020840152604085015160408401526060850151606084015282815261113b6080860161103e565b602082015261114c60a0860161103e565b604082015260c085015160608201528082525060e084015160208201526101008401516040820152610120840151606082015261118d856101408601611049565b6080820152949350505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156111c3576111c361119a565b500190565b634e487b7160e01b600052603260045260246000fd5b60006000198214156111f2576111f261119a565b5060010190565b60006102808201905061120d828451610dc8565b60208084015160e0840152604084015161010084015260608401516101208401526080840151610140840160005b600a8110156112615782516001600160a01b03168252918301919083019060010161123b565b505050509291505056fea2646970667358221220b1f620c3fcb3ca0a07c6f67e1e017e0f80fd48c9b35aa23b273eed90a4c6bd5164736f6c634300080c0033`,
  BytecodeLen: 6580,
  Which: `oD`,
  version: 8,
  views: {
    Explorer: {
      deliveredNetworkTime: `Explorer_deliveredNetworkTime`,
      deployedNetworkTime: `Explorer_deployedNetworkTime`,
      details: `Explorer_details`,
      listOfIngredients: `Explorer_listOfIngredients`,
      rejectReason: `Explorer_rejectReason`,
      reviewedNetworkTime: `Explorer_reviewedNetworkTime`,
      state: `Explorer_state`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:101:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:86:23:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Buyer": Buyer,
  "Seller_addIngredient": Seller_addIngredient
  };
export const _APIs = {
  Seller: {
    addIngredient: Seller_addIngredient
    }
  };
