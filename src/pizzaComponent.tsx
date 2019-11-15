import React, { useEffect } from 'react'
import { makeStyles, Slider, Button, TextField } from '@material-ui/core'
import { State } from './reducer'
import { pizzaHundler } from './pizzaContainer'

const useStyles = makeStyles({
    orderWrapper: {
        margin: '0 auto',
        padding: 30,
        textAlign: 'center',
        '& button': {
            padding: '0 50px'
        },
        maxWidth: 400
    },
    tabesugi: {
        fontSize: '300%'
    },
    textfield: {
        margin: '10px 0'
    },
    button: {
        margin: '30px 0'
    }
});

type Props = State & pizzaHundler

export const PizzaComponent: React.FC<Props> = (props: Props) => {
    const count = 1
    useEffect(() => {
        props.hundleInit()
    }, [count])
    const classes = useStyles();
    return (
        <>
            <div className={classes.orderWrapper}>
                <div>マルゲリータは一枚1000円です</div>
                <div>でも10枚頼むと200円引きです！</div>
                <Slider
                    defaultValue={0}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                    onChange={props.hundleUpdateQuantity}
                />
                <div>あなたはピザを{props.quantity}枚頼もうとしているので</div>
                <div>合計金額は{props.price}円です</div>
                <TextField
                    variant="outlined"
                    label="名前"
                    color="primary"
                    fullWidth
                    disabled
                    value={props.username}
                    className={classes.textfield}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    label="〒郵便番号"
                    color="primary"
                    className={classes.textfield}
                    value={props.postalCode}
                    onChange={(e) => props.hundleUpdatePostalCode(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    label="都道府県"
                    color="primary"
                    className={classes.textfield}
                    value={props.prefecture}
                    onChange={(e) => props.hundleUpdatePrefecture(e.target.value)}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    label="住所"
                    color="primary"
                    className={classes.textfield}
                    value={props.address}
                    onChange={(e) => props.hundleUpdateAddress(e.target.value)}
                />
                <div className={classes.button}>
                    {
                        (
                            (props.quantity > 0) &&
                            (props.postalCode.length === 7) &&
                            (props.prefecture.length > 0) &&
                            (props.address.length > 0)
                        ) ?
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => props.hundleOrder(props.username,
                                    props.price,
                                    props.postalCode,
                                    props.prefecture,
                                    props.address
                                )}
                            >注文</Button>
                            :
                            <Button
                                variant="contained"
                                color="primary"
                                disabled
                            >注文</Button>

                    }
                </div>
            </div>
        </>
    )
}