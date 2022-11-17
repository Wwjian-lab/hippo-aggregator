import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache, AptosLocalCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag, SimpleStructTag} from "@manahippo/move-to-ts";
import {OptionTransaction} from "@manahippo/move-to-ts";
import {HexString, AptosClient, AptosAccount, TxnBuilderTypes, Types} from "aptos";
export const packageName = "lending";
export const moduleAddress = new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e");
export const moduleName = "lending_protocol";


export function borrow_ (
  _user: HexString,
  _amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  return;
}


export function buildPayload_borrow (
  _amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e"),
    "lending_protocol",
    "borrow",
    typeParamStrings,
    [
      _amount,
    ],
    isJSON,
  );

}
export function deactivate_pool_ (
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  return;
}


export function buildPayload_deactivate_pool (
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e"),
    "lending_protocol",
    "deactivate_pool",
    typeParamStrings,
    [],
    isJSON,
  );

}
export function deposit_ (
  _user: HexString,
  _amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  return;
}


export function buildPayload_deposit (
  _amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e"),
    "lending_protocol",
    "deposit",
    typeParamStrings,
    [
      _amount,
    ],
    isJSON,
  );

}
export function repay_ (
  _user: HexString,
  _amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  return;
}


export function buildPayload_repay (
  _amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e"),
    "lending_protocol",
    "repay",
    typeParamStrings,
    [
      _amount,
    ],
    isJSON,
  );

}
export function withdraw_ (
  _user: HexString,
  _amount: U64,
  $c: AptosDataCache,
  $p: TypeTag[], /* <CoinType>*/
): void {
  return;
}


export function buildPayload_withdraw (
  _amount: U64,
  $p: TypeTag[], /* <CoinType>*/
  isJSON = false,
): TxnBuilderTypes.TransactionPayloadEntryFunction
   | Types.TransactionPayload_EntryFunctionPayload {
  const typeParamStrings = $p.map(t=>$.getTypeTagFullname(t));
  return $.buildPayload(
    new HexString("0x137b14ca0ce5e83296ee5fbc0c8713d64761f28f2d8d84004189768604c3f35e"),
    "lending_protocol",
    "withdraw",
    typeParamStrings,
    [
      _amount,
    ],
    isJSON,
  );

}
export function loadParsers(repo: AptosParserRepo) {
}
export class App {
  constructor(
    public client: AptosClient,
    public repo: AptosParserRepo,
    public cache: AptosLocalCache,
  ) {
  }
  get moduleAddress() {{ return moduleAddress; }}
  get moduleName() {{ return moduleName; }}
  payload_borrow(
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_borrow(_amount, $p, isJSON);
  }
  async borrow(
    _account: AptosAccount,
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_borrow(_amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_deactivate_pool(
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_deactivate_pool($p, isJSON);
  }
  async deactivate_pool(
    _account: AptosAccount,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_deactivate_pool($p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_deposit(
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_deposit(_amount, $p, isJSON);
  }
  async deposit(
    _account: AptosAccount,
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_deposit(_amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_repay(
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_repay(_amount, $p, isJSON);
  }
  async repay(
    _account: AptosAccount,
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_repay(_amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
  payload_withdraw(
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    isJSON = false,
  ): TxnBuilderTypes.TransactionPayloadEntryFunction
        | Types.TransactionPayload_EntryFunctionPayload {
    return buildPayload_withdraw(_amount, $p, isJSON);
  }
  async withdraw(
    _account: AptosAccount,
    _amount: U64,
    $p: TypeTag[], /* <CoinType>*/
    option?: OptionTransaction,
    _isJSON = false
  ) {
    const payload__ = buildPayload_withdraw(_amount, $p, _isJSON);
    return $.sendPayloadTx(this.client, _account, payload__, option);
  }
}

