import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Product from './src/components/Product'

const products = [
  {
    name: 'Arroz',
    discount: '10',
    sale: {
      pay: 4,
      take: 5
    },
    info: [
      {
        right: {
          title: 'Valor',
          text: 'R$ 20,00',
        },
        left: {
          title: 'Marca',
          text: 'Vasconcelos',
        }
      },
      {
        right: {
          title: 'Quantidade',
          text: '10',
        },
        left: {
          title: 'Ref',
          text: '001',
        }
      }
    ]
  },
  {
    name: 'Feijão',
    discount: '5',
    sale: {
      pay: 5,
      take: 6
    },
    info: [
      {
        right: {
          title: 'Valor',
          text: 'R$ 10,00',
        },
        left: {
          title: 'Marca',
          text: 'Vasconcelos',
        }
      },
      {
        right: {
          title: 'Quantidade',
          text: '15',
        },
        left: {
          title: 'Ref',
          text: '002',
        }
      }
    ]
  },
  {
    name: 'Detergente',
    discount: '20',
    sale: {
      pay: 9,
      take: 10
    },
    info: [
      {
        right: {
          title: 'Valor',
          text: 'R$ 1,99',
        },
        left: {
          title: 'Marca',
          text: 'Ypê',
        }
      },
      {
        right: {
          title: 'Quantidade',
          text: '100',
        },
        left: {
          title: 'Ref',
          text: '405',
        }
      }
    ]
  }
]

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('./assets/img/cart.png')}
        />
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyTitle}>Lista de produtos</Text>

        {
          products.map((item, index) => {
            return (
              <Product product={item} key={index} />
            )
          })
        }
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Supermercado @ 2021
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  header: {
    paddingHorizontal: 32,
    width: '100%',
    maxHeight: 50,
    backgroundColor: '#3d8af7'
  },
  image: {
    width: 50,
    height: 50
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 16
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#3d8af7'
  },
  footer: {
    width: '100%',
    height: 50,
    textAlign: 'center',
    paddingVertical: 15,
    backgroundColor: '#606060',
  },
  footerText: {
    color: '#fff'
  }
});
