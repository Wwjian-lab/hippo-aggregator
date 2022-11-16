module lending::lending_protocol {
    
    public entry fun deposit<CoinType>(_user: &signer, _amount: u64) {}

    public entry fun withdraw<CoinType>(_user: &signer, _amount: u64) {}

    public entry fun borrow<CoinType>(_user: &signer, _amount: u64) {}

    public entry fun repay<CoinType>(_user: &signer, _amount: u64) {}

}