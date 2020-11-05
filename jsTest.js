describe('drivers', function() {
    describe('updateDriverWithKeyAndValue(driver,key,value', function () {
        beforeEach(function() {
            for (const key in driver) {
                delete driver[key]
            }

            driver.name = 'Sam'
        })

        it('returns a driver with the original key value pairs and the new key value pair', function() {
            expect(updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')).to.eql({
                name: 'Sam',
                address: '11 Broadway'
            })
        })

        it('it does not modify...', function() {
            updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')

            expect(driver['address'].to.equal(undefined))
        })
    })
})