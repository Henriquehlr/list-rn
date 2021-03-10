import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native'

export default class Product extends Component {
  render () {
    return (
      <View style={styles.productWrapper}>
        <Text style={styles.productName}>
          { this.props.product.name }
        </Text>

        {
          this.props.product.info.map((item, index) => {
            return (
              <View style={styles.productInfo} key={index}>
                <View style={styles.infoLeft}>
                  <Text style={styles.title}>
                    { item.right.title }:&nbsp;
                  </Text>

                  <Text style={styles.text}>
                    { item.right.text }
                  </Text>
                </View>

                <View style={styles.infoRight}>
                  <Text style={styles.title}>
                    { item.left.title }:&nbsp;
                  </Text>

                  <Text style={styles.text}>
                    { item.left.text }
                  </Text>
                </View>
              </View>
            )
          })
        }

        <View style={styles.discountWrapper}>
          <View style={styles.discount}>
            <Text style={{ color: '#fff' }}>
              { this.props.product.discount }% de desconto
            </Text>
          </View>

          <View style={styles.sale}>
            <Text style={{ color: '#fff' }}>
              Leve { this.props.product.sale.take } pague { this.props.product.sale.pay }
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  productWrapper: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#c2c2c2'
  },
  productName: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 8,
    fontWeight: 'bold',
    width: '100%'
  },
  productInfo: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  infoLeft: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  infoRight: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  text: {
    fontSize: 16,
    color: '#fff'
  },
  discountWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8
  },
  discount: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#72bb53',
    marginRight: 4
  },
  sale: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#ff8351',
    marginLeft: 4
  }
});
