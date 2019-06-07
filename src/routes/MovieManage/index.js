import React from 'react'
import {Card, Spin, Button, Radio, List, Switch, Avatar,BackTop,Anchor,Affix,Icon} from 'antd'


const data3 = []
for(let i=0;i<23;i++){
  data3.push({
    title: `夏目友人帐`,
    avatar: "http://n.sinaimg.cn/translate/640/w600h840/20190312/ampL-hufnxfm4278816.jpg",
    type: 'av',
    director: "真菌夏目",
    actor: '村上春树',
    content: '在人与妖怪之间过着忙碌日子的夏目，偶然与以前的同学结城重逢，由此回忆起了被妖怪缠身的苦涩记忆。此时，夏目认识了在归还名字的妖怪记忆中出现的女性·津村容莉枝。',
    like: i*30+''
  })
}

const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

export default class MovieManage extends React.Component{
    handleClick(){
        alert("caonima")


    }
  render(){
    return (
    <Card bordered={false} title={<div>已上架电影<Button onClick={this.handleClick} id="addFilm" style={{float:"right"}}>上架新电影</Button></div>} style={{marginBottom: 15}} id='verticalStyle'>
          <List dataSource={data3}
                itemLayout='vertical'
                pagination={{pageSize: 10}}
                style={styles.listStyle}
                renderItem={item=>{
                  return (
                    <List.Item
                      extra={<img width={160} height={200} alt="logo" src="http://n.sinaimg.cn/translate/640/w600h840/20190312/ampL-hufnxfm4278816.jpg" />}>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a>{item.title}</a>}
                      />
                      类型：{item.type}&emsp;导演：{item.director}&emsp;主演：{item.actor}
                      <br></br>
                      <br></br>
                      {item.content}
                      <br></br>
                      <br></br>
                      <IconText type="like-o" text={item.like} />
                      </List.Item>
                  )
                }}
          />
        </Card>
    )
  }
}

const styles = {
    addFilm:{
        marginRight :5
    },
    haveBorder: {
      minHeight: 270,
      width:'80%',
      boxSizing: 'border-box'
    },
    noBorder: {
      minHeight: 270,
      width:'80%',
      padding: '0 24px',
      boxSizing: 'border-box',
      border: '1px solid #fff'
    },
    loadMore: {
      height: 32,
      marginTop: 16,
      lineHeight: '32px',
      textAlign: 'center',
    },
    listStyle:{
      width:'100%'
    },
    affixBox:{
      position: 'absolute',
      top: 100,
      right: 50,
      with: 170
    },
  }