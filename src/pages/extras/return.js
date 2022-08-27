import React from "react";
import { Row, Col } from "antd";
import Container from "../../components/other/Container";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";

export default function Abut() {
    return (
        <LayoutOne title="Homepage 2">
            <SectionTitle title="Return/Refund Policy" className="-center" />

            <div className="introduction-two">
                <Container>
                    <div className="introduction-two-wrapper">
                        <Row>
                            <Col md={24}>
                                <div
                                    className="introduction-two-content"
                                    style={{ paddingTop: "5em" }}
                                >
                                    <p>
                                        Our policy lasts 30 days. If 30 days have gone by since your
                                        purchase, unfortunately we can’t offer you a refund or
                                        exchange. To be eligible for a return, your item must be
                                        unused and in the same condition that you received it. It
                                        must also be in the original packaging. Several types of
                                        goods are exempt from being returned. Perishable goods such
                                        as food, flowers, newspapers or magazines cannot be
                                        returned. We also do not accept products that are intimate
                                        or sanitary goods, hazardous materials, or flammable liquids
                                        or gases.
                                    </p>

                                    <h5>Additional non-returnable items</h5>

                                    <p>● Gift cards </p>
                                    <p> ● Downloadable software products </p>
                                    <p> ● Some health and personal care items</p>
                                    <p>
                                        To complete your return, we require a receipt or proof of
                                        purchase. Please do not send your purchase back to the
                                        manufacturer. There are certain situations where only
                                        partial refunds are granted: (if applicable) Book with
                                        obvious signs of use CD, DVD, VHS tape, software, video
                                        game, cassette tape, or vinyl record that has been opened.
                                        Any item not in its original condition, is damaged or
                                        missing parts for reasons not due to our error. Any item
                                        that is returned more than 30 days after delivery
                                    </p>

                                    <h3>Refunds (if applicable)</h3>

                                    <p>
                                        Once your return is received and inspected, we will send you
                                        an email to notify you that we have received your returned
                                        item. We will also notify you of the approval or rejection
                                        of your refund. If you are approved, then your refund will
                                        be processed, and a credit will automatically be applied to
                                        your credit card or original method of payment, within a
                                        certain amount of days.
                                    </p>

                                    <h3>Late or missing refunds (if applicable)</h3>
                                    <p>
                                        If you haven’t received a refund yet, first check your bank
                                        account again. Then contact your credit card company, it may
                                        take some time before your refund is officially posted. Next
                                        contact your bank. There is often some processing time
                                        before a refund is posted.
                                    </p>

                                    <p>
                                        If you’ve done all of this and you still have not received
                                        your refund yet, please contact us at
                                        yugsrijeta.awgpup@gmail.com.
                                    </p>

                                    <h3>Sale items (if applicable)</h3>
                                    <p>
                                        Only regular priced items may be refunded, unfortunately
                                        sale items cannot be refunded.
                                    </p>

                                    <h3>Exchanges (if applicable)</h3>
                                    <p>
                                        We only replace items if they are defective or damaged. If
                                        you need to exchange it for the same item, send us an email
                                        at yugsrijeta.awgpup@gmail.com and send your item to: 622
                                        Manglam Electronic Market Jaipur Rajasthan India 302001.
                                    </p>
                                    <h5>Gifts</h5>
                                    <p>
                                        If the item was marked as a gift when purchased and shipped
                                        directly to you, you’ll receive a gift credit for the value
                                        of your return. Once the returned item is received, a gift
                                        certificate will be mailed to you.
                                    </p>
                                    <p>
                                        If the item wasn’t marked as a gift when purchased, or the
                                        gift giver had the order shipped to themselves to give to
                                        you later, we will send a refund to the gift giver and he
                                        will find out about your return.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </LayoutOne>
    );
}
