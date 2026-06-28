var csScenarios = [
    {
        id: 1,
        title: 'Defective Headphones',
        customerName: 'Karen M.',
        customerEmoji: '😡',
        situation: 'Customer purchased wireless headphones 3 days ago. The left earbud stopped working.',
        rounds: [
            {
                customerText: "I bought these headphones THREE days ago and the left side is already dead! This is unacceptable! I want my money back RIGHT NOW!",
                options: [
                    { text: "I understand how frustrating it is when a new product fails. Let's pull up your order and I'll see what replacement options we have.", score: 100 },
                    { text: "I can certainly help process a return for those headphones. Do you have your order number handy?", score: 50 },
                    { text: "Our policy allows returns within 14 days, so we can take those back if they are defective.", score: 30 },
                    { text: "You'll need to send those back to us before we can do anything about the left earbud.", score: 10 }
                ]
            },
            {
                customerText: "I don't have the receipt anymore. Does that mean I'm stuck with broken headphones?!",
                options: [
                    { text: "Not at all. We can easily verify your purchase using your account email or the credit card you used.", score: 100 },
                    { text: "Without a receipt, I can try to look it up, but it might take a few extra minutes.", score: 50 },
                    { text: "We usually require a receipt, but I might be able to make an exception this time.", score: 30 },
                    { text: "If you don't have the receipt, I can only offer you store credit at the current lowest selling price.", score: 10 }
                ]
            },
            {
                customerText: "Okay, you found it. So what are my options here?",
                options: [
                    { text: "I can immediately issue a full refund to your original payment method, or ship an expedited replacement.", score: 100 },
                    { text: "I can go ahead and process a refund to your credit card right now.", score: 50 },
                    { text: "You can either exchange them for the exact same model or get a refund.", score: 30 },
                    { text: "We can only do a refund. Replacements require a new transaction.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Late Delivery',
        customerName: 'James R.',
        customerEmoji: '😤',
        situation: 'Customer ordered a birthday gift that was supposed to arrive 2 days ago. The birthday is today.',
        rounds: [
            {
                customerText: "My son's birthday is TODAY and the gift I ordered hasn't arrived! It was supposed to be here two days ago! What is going on?!",
                options: [
                    { text: "I am so sorry for the delay, especially on such an important day. Let me track this immediately and see exactly where it is.", score: 100 },
                    { text: "I apologize for the shipping delay. Let me check the tracking status for you right away.", score: 50 },
                    { text: "Shipping can sometimes be unpredictable, but let me see if the carrier has updated the tracking.", score: 30 },
                    { text: "Unfortunately we can't control the carrier once it leaves our warehouse. Let's look at the tracking.", score: 10 }
                ]
            },
            {
                customerText: "The tracking says it's stuck at some warehouse! This is useless to me now. My son will have no present!",
                options: [
                    { text: "I understand a late gift is extremely disappointing. Let's see if there's a nearby store with stock, or I can arrange an expedited replacement.", score: 100 },
                    { text: "Since it won't arrive today, I can offer to cancel the order and issue a full refund if you prefer.", score: 50 },
                    { text: "I can submit an inquiry with the warehouse, but it might take 24-48 hours to get a response.", score: 30 },
                    { text: "There is nothing I can do while it's at the warehouse. You will have to wait for it to move.", score: 10 }
                ]
            },
            {
                customerText: "I'd prefer the expedited replacement, but what do I do with the original package when it finally shows up?",
                options: [
                    { text: "Don't worry about it at all. Once it arrives, you can keep it as a backup or donate it. No need to deal with a return.", score: 100 },
                    { text: "I'll email you a prepaid return label. Just drop it off at any shipping location when it arrives.", score: 50 },
                    { text: "You can just refuse the delivery when the driver attempts to drop it off.", score: 30 },
                    { text: "You will be charged for both if you don't return the original package within 14 days.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Wrong Order',
        customerName: 'Priya S.',
        customerEmoji: '😠',
        situation: 'Customer ordered a blue dress in size medium but received a red dress in size large.',
        rounds: [
            {
                customerText: "I ordered a BLUE dress in medium and you sent me a RED one in LARGE! I needed this for a wedding this weekend!",
                options: [
                    { text: "I apologize for this packing error. I know how stressful finding a wedding outfit is. Let's get this fixed for you immediately.", score: 100 },
                    { text: "I'm sorry we sent the wrong color and size. Let me verify the stock for the blue medium dress.", score: 50 },
                    { text: "It looks like the warehouse made a mistake. Let me check if we can still get the blue one to you.", score: 30 },
                    { text: "To process an exchange, I'll first need you to upload a photo of the incorrect item you received.", score: 10 }
                ]
            },
            {
                customerText: "The wedding is in THREE days. A normal return won't work. What can you do?",
                options: [
                    { text: "I can overnight the blue dress to you today so you have it by tomorrow. You won't pay a dime for shipping.", score: 100 },
                    { text: "I'll upgrade your shipping to express, which should get it there within 2 business days.", score: 50 },
                    { text: "I can check if there are any express shipping options available for your location.", score: 30 },
                    { text: "Standard shipping takes 3-5 days, so I can't guarantee it will arrive in time for the wedding.", score: 10 }
                ]
            },
            {
                customerText: "Thank you. But honestly, this whole experience has been really stressful. I almost had nothing to wear.",
                options: [
                    { text: "You have every right to be upset. I'm adding a $25 credit to your account for the inconvenience. I hope you enjoy the wedding!", score: 100 },
                    { text: "I completely understand. I'll make sure the correct dress goes out today. Have a good time at the wedding.", score: 50 },
                    { text: "I'm glad we could get it sorted out in time. Is there anything else I can assist with?", score: 30 },
                    { text: "Well, at least we caught it before the weekend! You'll look great.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Overcharged Account',
        customerName: 'David K.',
        customerEmoji: '🤬',
        situation: 'Customer was charged twice for a single purchase of $89.99.',
        rounds: [
            {
                customerText: "You charged me TWICE for the same order! That's $180 out of my account! I'm on a tight budget and now my account is overdrawn!",
                options: [
                    { text: "I am so sorry, David. Double charges are a serious issue, and I will investigate your billing history right now to correct this.", score: 100 },
                    { text: "I apologize for the billing error. Let me pull up your account and see why you were charged twice.", score: 50 },
                    { text: "One of those might just be a pending authorization. Let me check the transaction logs.", score: 30 },
                    { text: "You should call your bank first to verify if the charges have actually posted.", score: 10 }
                ]
            },
            {
                customerText: "I already checked with my bank. Both charges posted. I need that $89.99 back NOW.",
                options: [
                    { text: "I confirm the duplicate charge on our end. I am initiating an immediate reversal of the second charge. It should process within 24 hours.", score: 100 },
                    { text: "I see the two charges. I will submit a refund request to our finance department.", score: 50 },
                    { text: "Our standard refund timeframe is 3-5 business days. I will start the process now.", score: 30 },
                    { text: "I can only submit the request. The speed of the refund depends entirely on your bank.", score: 10 }
                ]
            },
            {
                customerText: "24 hours is okay. But what about the overdraft fees I got hit with because of YOUR mistake?",
                options: [
                    { text: "I completely agree you shouldn't pay for our error. If you send a statement showing the fee, I will submit it for full reimbursement.", score: 100 },
                    { text: "I can offer you a store credit equal to the amount of the overdraft fee.", score: 50 },
                    { text: "I can escalate your request for overdraft fee reimbursement to a supervisor.", score: 30 },
                    { text: "Unfortunately, our Terms of Service state we are not liable for external bank fees.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 5,
        title: 'Cancelled Reservation',
        customerName: 'Lisa T.',
        customerEmoji: '😢',
        situation: 'Customer\'s hotel reservation for an anniversary trip was cancelled without notice.',
        rounds: [
            {
                customerText: "I just found out my hotel reservation for our anniversary weekend was CANCELLED! We've been planning this trip for months! How could this happen?!",
                options: [
                    { text: "I am so sorry, Lisa. I know how important an anniversary trip is. Let me look into this immediately to find out what happened and fix it.", score: 100 },
                    { text: "I apologize for the cancellation. Let me check the booking system to see the reason.", score: 50 },
                    { text: "That is highly unusual. Did you receive any notification email prior to this?", score: 30 },
                    { text: "Reservations are sometimes cancelled if the payment method on file fails. Let's check that first.", score: 10 }
                ]
            },
            {
                customerText: "It says it was a 'system error.' A SYSTEM ERROR ruined our anniversary plans?! Everything in the area is booked now!",
                options: [
                    { text: "A system error is our responsibility, and I will make this right. I am actively searching our partner hotels for available suites in the same area.", score: 100 },
                    { text: "I will do my best to find alternative accommodations for you nearby.", score: 50 },
                    { text: "I can put you on a priority waitlist for the original hotel in case of a cancellation.", score: 30 },
                    { text: "If the area is fully booked, the best I can do is issue a full refund.", score: 10 }
                ]
            },
            {
                customerText: "If you can find a suite, that would help. But we specifically planned for this weekend.",
                options: [
                    { text: "I found a premium suite at a nearby partner property. I will book it for you at no extra charge, and add a complimentary dinner voucher for your anniversary.", score: 100 },
                    { text: "I found a comparable room nearby and can book it for the same price you originally paid.", score: 50 },
                    { text: "There is one room left, but it's a slight downgrade from what you originally booked. Should I secure it?", score: 30 },
                    { text: "I couldn't find anything identical. You might want to try looking on other booking websites.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 6,
        title: 'Expired Coupon',
        customerName: 'Mark B.',
        customerEmoji: '😒',
        situation: 'Customer has a coupon that expired yesterday and wants to use it on a $200 purchase.',
        rounds: [
            {
                customerText: "My 30% off coupon expired YESTERDAY. I drove all the way here to use it! Can't you just honor it? It's only one day past!",
                options: [
                    { text: "I understand it's frustrating to just miss the deadline. Let me see if the system will allow me to apply a grace period for you.", score: 100 },
                    { text: "Since it only expired yesterday, let me check with my manager if we can still accept it.", score: 50 },
                    { text: "The registers automatically reject expired coupons, but I can check for other current promotions.", score: 30 },
                    { text: "I'm sorry, but our policy strictly prohibits accepting expired coupons under any circumstances.", score: 10 }
                ]
            },
            {
                customerText: "So can you apply the discount or not? I've been a loyal customer here for years.",
                options: [
                    { text: "Given your loyalty, I'm going to override the expiration and honor the 30% discount for you today.", score: 100 },
                    { text: "I can't use that specific barcode, but I can manually apply a 20% discount instead.", score: 50 },
                    { text: "The system won't let me do 30%, but if you sign up for our credit card you get 15% off.", score: 30 },
                    { text: "As I mentioned, the system will not allow it. I apologize for the inconvenience.", score: 10 }
                ]
            },
            {
                customerText: "Thank you! I appreciate you working with me on this. I'll definitely keep coming back.",
                options: [
                    { text: "We appreciate your continued business, Mark. I'll get you checked out right away so you can enjoy your items.", score: 100 },
                    { text: "You're welcome. Your total comes to $140 after the discount.", score: 50 },
                    { text: "No problem. Just make sure to read the expiration dates carefully next time.", score: 30 },
                    { text: "Sure thing. Just remember this is a one-time exception.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Rude Staff Complaint',
        customerName: 'Angela W.',
        customerEmoji: '😤',
        situation: 'Customer says she was treated rudely by another staff member while asking for help.',
        rounds: [
            {
                customerText: "One of your employees just rolled their eyes at me when I asked for help finding a product! That is SO unprofessional!",
                options: [
                    { text: "I am very sorry you experienced that. That behavior is completely contrary to our standards. Can you tell me what you were looking for so I can assist you?", score: 100 },
                    { text: "I apologize for their behavior. Let me help you find the product you are looking for.", score: 50 },
                    { text: "I'm sorry to hear that. I will let the store manager know about the incident.", score: 30 },
                    { text: "Are you sure they were rolling their eyes at you? It might have been a misunderstanding.", score: 10 }
                ]
            },
            {
                customerText: "It was the person at the electronics counter. They acted like I was bothering them. I just wanted help picking a laptop!",
                options: [
                    { text: "You should always feel welcome asking for help here. I'm going to personally walk you through our laptop selection right now.", score: 100 },
                    { text: "I'm familiar with our laptops. Let's head over to the aisle and I can answer your questions.", score: 50 },
                    { text: "The electronics counter can be very busy today, but that's no excuse. I can help you.", score: 30 },
                    { text: "I'll go tell them to improve their attitude. Give me one moment.", score: 10 }
                ]
            },
            {
                customerText: "I appreciate you helping me instead. I just don't want this to happen to other customers.",
                options: [
                    { text: "I agree completely. I will file a formal feedback report with management so this gets addressed. Now, let's find that perfect laptop.", score: 100 },
                    { text: "I'll definitely make sure management hears about this. What kind of laptop do you need?", score: 50 },
                    { text: "We will handle the employee internally. Let's focus on your purchase.", score: 30 },
                    { text: "Hopefully it won't happen again. Now, what's your budget?", score: 10 }
                ]
            }
        ]
    },
    {
        id: 8,
        title: 'Subscription Cancellation',
        customerName: 'Tom H.',
        customerEmoji: '😡',
        situation: 'Customer has been trying to cancel a subscription for 3 months and keeps getting charged.',
        rounds: [
            {
                customerText: "I've been trying to cancel my subscription for THREE MONTHS and you keep charging me! I've called twice already and nothing has changed!",
                options: [
                    { text: "I apologize for the repeated failure to cancel your account. I am pulling up your profile to process the cancellation immediately and permanently.", score: 100 },
                    { text: "I'm sorry you're still being charged. Let me verify your account details to process the cancellation.", score: 50 },
                    { text: "I can see there were previous notes on your account. Let me submit a new cancellation request.", score: 30 },
                    { text: "Cancellations must be done through the online portal. Did you complete all the steps?", score: 10 }
                ]
            },
            {
                customerText: "I want ALL three months refunded. I tried to cancel before the first charge!",
                options: [
                    { text: "Since you attempted to cancel prior to these charges, I am authorizing a full refund for all three months right now.", score: 100 },
                    { text: "I will process the cancellation and submit a request to refund the past three months.", score: 50 },
                    { text: "I can refund the most recent charge immediately, but the older two will need manager review.", score: 30 },
                    { text: "Our policy normally only allows refunds for the current billing cycle, unfortunately.", score: 10 }
                ]
            },
            {
                customerText: "Fine. And how do I know this won't happen AGAIN next month?",
                options: [
                    { text: "I am sending you a confirmation email right now with a cancellation confirmation number. Your account is fully closed and cannot be billed again.", score: 100 },
                    { text: "Your account status now says 'Cancelled' in our system. You are good to go.", score: 50 },
                    { text: "If you get charged again, just reply to the email I'm about to send you.", score: 30 },
                    { text: "You can always monitor your credit card statement to be sure.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Allergic Reaction to Product',
        customerName: 'Sarah L.',
        customerEmoji: '😰',
        situation: 'Customer had a mild allergic reaction to a skincare product that didn\'t list all ingredients.',
        rounds: [
            {
                customerText: "I broke out in hives after using your moisturizer! The label didn't mention it contained almond oil, which I'm allergic to! This is dangerous!",
                options: [
                    { text: "I am so sorry to hear this, Sarah. Your safety is our absolute priority. First, are you feeling okay, or do you need medical assistance?", score: 100 },
                    { text: "I apologize for the reaction. That sounds very uncomfortable. We take product safety very seriously.", score: 50 },
                    { text: "I can certainly issue a refund if the product gave you an allergic reaction.", score: 30 },
                    { text: "The ingredients should all be listed on the back. Are you certain it wasn't there?", score: 10 }
                ]
            },
            {
                customerText: "The hives went away with antihistamines. But I'm upset because I specifically checked the label before buying!",
                options: [
                    { text: "I'm relieved you're okay. An unlisted allergen is a severe issue. I am flagging this product immediately for our safety team to investigate the labeling.", score: 100 },
                    { text: "I'm glad you're feeling better. I will report this discrepancy to our quality control department.", score: 50 },
                    { text: "I'll process a refund for the moisturizer right away since the label was misleading.", score: 30 },
                    { text: "Sometimes ingredient names are listed under their scientific names. It can be tricky.", score: 10 }
                ]
            },
            {
                customerText: "Will other customers be warned about this? I don't want someone with a severe allergy to have a worse reaction.",
                options: [
                    { text: "Yes. By escalating this, our compliance team will audit the product, and if the label is inaccurate, they will issue a recall or correction.", score: 100 },
                    { text: "I will make sure this feedback is passed along so the product team can look into updating the packaging.", score: 50 },
                    { text: "We'll do our best to ensure the manufacturer updates their labeling information.", score: 30 },
                    { text: "It's ultimately up to the manufacturer, but we will notify them of your complaint.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 10,
        title: 'Price Match Request',
        customerName: 'Mike D.',
        customerEmoji: '😐',
        situation: 'Customer found the same TV $200 cheaper at a competitor and wants a price match.',
        rounds: [
            {
                customerText: "I just saw this exact same TV at TechMart for $200 less! I bought it here last week. Can you match the price?",
                options: [
                    { text: "We definitely offer a price match guarantee within 14 days of purchase. Let me verify the competitor's ad so we can get you that difference.", score: 100 },
                    { text: "I can help with a price adjustment. Do you have proof of the competitor's current pricing?", score: 50 },
                    { text: "Let me check our price matching policy to see if TechMart is an approved competitor.", score: 30 },
                    { text: "We usually only price match at the time of purchase, not after the fact.", score: 10 }
                ]
            },
            {
                customerText: "Here's their ad showing the price. Same brand, same model number, same everything.",
                options: [
                    { text: "Everything matches perfectly. I am processing a $200 credit back to your original payment method right now.", score: 100 },
                    { text: "I've verified the ad. I'll need to submit this for manager approval, which should only take a moment.", score: 50 },
                    { text: "Since the difference is so large, I can only offer you a store credit for the $200 difference.", score: 30 },
                    { text: "TechMart might be running a clearance sale. We don't match clearance pricing.", score: 10 }
                ]
            },
            {
                customerText: "Awesome, thanks! I almost returned the whole thing. Glad I asked first.",
                options: [
                    { text: "I'm glad you asked too! We want you to feel confident you're getting the best value when you shop with us.", score: 100 },
                    { text: "You're very welcome. The refund should show up on your statement in 3-5 business days.", score: 50 },
                    { text: "Returning it would have been a hassle for both of us. Glad we could resolve it.", score: 30 },
                    { text: "Just remember to check prices before buying next time to save us a step.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 11,
        title: 'Long Wait Time',
        customerName: 'Rachel F.',
        customerEmoji: '😤',
        situation: 'Customer has been on hold for 45 minutes before finally reaching an agent.',
        rounds: [
            {
                customerText: "I've been on hold for 45 MINUTES! This is absolutely ridiculous! I almost hung up three times!",
                options: [
                    { text: "I sincerely apologize for the unacceptable wait time, Rachel. I appreciate your patience, and I'm ready to resolve your issue immediately so you can get on with your day.", score: 100 },
                    { text: "I am sorry for the wait. We are experiencing higher than normal call volumes today. How can I help?", score: 50 },
                    { text: "Thank you for holding. We are short-staffed today. What do you need assistance with?", score: 30 },
                    { text: "I apologize. For faster service in the future, you might want to try our online chat.", score: 10 }
                ]
            },
            {
                customerText: "I just need to update my billing address. It should have taken 2 minutes, not an hour of my day!",
                options: [
                    { text: "You're absolutely right. I have your account pulled up right now. What is the new billing address?", score: 100 },
                    { text: "I can certainly update that for you quickly. Please provide the new address details.", score: 50 },
                    { text: "I can transfer you to the automated system which handles address changes very quickly.", score: 30 },
                    { text: "You actually could have updated that yourself through the customer portal on our website.", score: 10 }
                ]
            },
            {
                customerText: "The new address is 123 Main St. I never want to sit on hold that long again.",
                options: [
                    { text: "Your address is updated. To save you time in the future, I'm emailing you a direct link to the self-service portal, and applying a $10 credit for the time you lost today.", score: 100 },
                    { text: "I have updated the address successfully. Is there anything else I can assist you with today?", score: 50 },
                    { text: "Address updated. Again, sorry for the wait times. Have a good rest of your day.", score: 30 },
                    { text: "It's updated. Try calling earlier in the morning next time to avoid the rush.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 12,
        title: 'Missing Item in Order',
        customerName: 'Chris P.',
        customerEmoji: '😠',
        situation: 'Customer ordered 5 items but only received 4 in the delivery package.',
        rounds: [
            {
                customerText: "I ordered 5 things and only got 4! The most expensive item is missing — the wireless speaker! Where is it?!",
                options: [
                    { text: "I apologize for the missing speaker. Let me review your order details right now to see how this occurred.", score: 100 },
                    { text: "I'm sorry your order was incomplete. Let me check the tracking to see if it shipped in a separate box.", score: 50 },
                    { text: "Sometimes warehouse staff forgets an item. I'll need to submit a missing inventory ticket.", score: 30 },
                    { text: "Are you sure it's not hidden in the packing materials? Sometimes small items get overlooked.", score: 10 }
                ]
            },
            {
                customerText: "There's no second tracking number. The packing slip says 5 items but only 4 were in the box!",
                options: [
                    { text: "Since the slip says it should be there, this is clearly a packing error. I will immediately ship a replacement speaker to you via expedited shipping.", score: 100 },
                    { text: "I can either ship a replacement speaker to you, or I can issue a refund for that item. Which do you prefer?", score: 50 },
                    { text: "I will initiate an investigation with the warehouse. Once they confirm the inventory discrepancy, I can send a replacement.", score: 30 },
                    { text: "Without proof, I have to escalate this to a supervisor before I can authorize a replacement.", score: 10 }
                ]
            },
            {
                customerText: "Tomorrow works. But this is the second time I've had issues with orders from you guys.",
                options: [
                    { text: "I'm very sorry for the repeated issues. I am adding a note to your account ensuring all future orders receive an additional manual quality check before shipping.", score: 100 },
                    { text: "I apologize that we haven't met your expectations. We will strive to do better on your next order.", score: 50 },
                    { text: "Errors do happen occasionally when dealing with large volumes of shipments.", score: 30 },
                    { text: "Well, we process thousands of orders a day, so a few mistakes are bound to happen.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 13,
        title: 'Warranty Dispute',
        customerName: 'Nina V.',
        customerEmoji: '😡',
        situation: 'Customer\'s laptop broke down 1 week after the 1-year warranty expired.',
        rounds: [
            {
                customerText: "My laptop died just ONE WEEK after the warranty expired! Are you seriously telling me I'm out of luck?! This is a $1,200 machine!",
                options: [
                    { text: "I completely understand your frustration. Since you are only one week past the warranty window, let me review the account and see if we can offer an exception.", score: 100 },
                    { text: "I know it's frustrating timing. Let me check if there are any known manufacturer defects that might still cover it.", score: 50 },
                    { text: "I can offer you a discounted rate on the repair since it just barely expired.", score: 30 },
                    { text: "Unfortunately, the warranty terms are strict. Once it expires, repairs are out-of-pocket.", score: 10 }
                ]
            },
            {
                customerText: "It's ONE WEEK! The timing is basically the same. There has to be something you can do!",
                options: [
                    { text: "Given how close you are to the expiration date, I am submitting a request for a goodwill warranty extension. I will advocate to get this covered for you.", score: 100 },
                    { text: "I will escalate your case to our customer retention team to see if they can authorize a free repair.", score: 50 },
                    { text: "The best I can authorize right now is covering the cost of labor, but you would pay for parts.", score: 30 },
                    { text: "I understand, but lines have to be drawn somewhere. We offer extended warranties at checkout for this reason.", score: 10 }
                ]
            },
            {
                customerText: "Really? You'd do that? That would save me so much money.",
                options: [
                    { text: "My manager just approved the goodwill extension. I am sending you a prepaid shipping label now so we can get your laptop repaired at no cost.", score: 100 },
                    { text: "I submitted the request. We should have an answer for you within 24 to 48 hours.", score: 50 },
                    { text: "If it gets approved, we'll email you the instructions on where to send it.", score: 30 },
                    { text: "Don't get your hopes up too high, these requests are frequently denied.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 14,
        title: 'Misleading Advertisement',
        customerName: 'Amy C.',
        customerEmoji: '😒',
        situation: 'Customer bought a "waterproof" phone case that leaked and damaged her phone.',
        rounds: [
            {
                customerText: "Your phone case was advertised as 'waterproof' but water got in and now my $800 phone screen is glitching! This is false advertising!",
                options: [
                    { text: "I am so sorry to hear this, Amy. If the case failed to perform as advertised, we need to make it right. Let's gather the details so I can help.", score: 100 },
                    { text: "I apologize for the damage. Let me check the specific water resistance rating for that case model.", score: 50 },
                    { text: "Waterproof claims usually have depth and time limits. How deep underwater was the phone?", score: 30 },
                    { text: "We are only liable for the cost of the case, not the device inside it.", score: 10 }
                ]
            },
            {
                customerText: "I used it exactly as the ad showed — taking photos underwater in a pool! Now I have a damaged phone AND a useless case!",
                options: [
                    { text: "Since you used it as intended, I am escalating this to our claims department to review covering the cost of your phone repair, and refunding the case.", score: 100 },
                    { text: "I will immediately refund the purchase price of the case. For the phone, I will need to transfer you to our claims team.", score: 50 },
                    { text: "I can process a refund for the case, but you will need to file a claim with your phone's insurance for the screen.", score: 30 },
                    { text: "The fine print says we don't cover device damage. I can only offer you a replacement case.", score: 10 }
                ]
            },
            {
                customerText: "You'll look into covering the phone repair too? I didn't expect that. Thank you.",
                options: [
                    { text: "It's the right thing to do. Please send me a quote from a certified repair shop, and I will attach it to your expedited claim.", score: 100 },
                    { text: "Yes, our claims department will evaluate the situation. You'll hear from them in a few days.", score: 50 },
                    { text: "We will try our best, but please understand we cannot guarantee the phone repair will be covered.", score: 30 },
                    { text: "We'll review it, but it's highly unlikely they will pay for an $800 phone.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 15,
        title: 'Gift Card Balance',
        customerName: 'Robert G.',
        customerEmoji: '😤',
        situation: 'Customer purchased a $100 gift card that shows a $0 balance even though it was never used.',
        rounds: [
            {
                customerText: "I bought a $100 gift card as a present and when they tried to use it, it showed ZERO balance! I just bought it last week! This is embarrassing!",
                options: [
                    { text: "I apologize for the embarrassment this caused. Let's trace the card number immediately to see where the error occurred.", score: 100 },
                    { text: "I'm sorry to hear that. Can you provide the gift card number so I can check its transaction history?", score: 50 },
                    { text: "Sometimes it takes up to 24 hours for funds to load, but a week is too long. Let me look it up.", score: 30 },
                    { text: "Gift card fraud is common. Are you sure the recipient didn't spend it or lose the code?", score: 10 }
                ]
            },
            {
                customerText: "Here's the card number. Nobody used it — it went straight from the store into a birthday card!",
                options: [
                    { text: "I see what happened. The store register failed to activate it properly. I am manually loading the $100 onto the card right now.", score: 100 },
                    { text: "It looks like an activation error. If you send me a picture of your original receipt, I can fix this.", score: 50 },
                    { text: "I can see it wasn't activated. You'll need to return to the store where you bought it so they can activate it.", score: 30 },
                    { text: "Without the original purchase receipt, I cannot verify that you actually paid $100 for this card.", score: 10 }
                ]
            },
            {
                customerText: "Thank you for fixing it so quickly. My friend felt terrible thinking I gave her an empty card.",
                options: [
                    { text: "Please apologize to your friend on our behalf. The card is now fully active, and I've added an extra $15 to it for the inconvenience.", score: 100 },
                    { text: "The card is working now, so she can try using it again on her next purchase.", score: 50 },
                    { text: "Glad we could get it sorted out. Activation errors happen occasionally.", score: 30 },
                    { text: "You might want to hold onto your receipts next time you buy a gift card, just in case.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 16,
        title: 'App Crash Issue',
        customerName: 'Tyler M.',
        customerEmoji: '😠',
        situation: 'Customer\'s mobile app keeps crashing and they can\'t access their account with stored payment info.',
        rounds: [
            {
                customerText: "Your app keeps crashing every time I try to open it! I have saved payment info and orders I need to check. This has been going on for two days!",
                options: [
                    { text: "I apologize for the technical issues, Tyler. While our team investigates the app, let me help you access your account information manually.", score: 100 },
                    { text: "I'm sorry the app isn't working. Have you tried uninstalling and reinstalling it?", score: 50 },
                    { text: "We've had a few reports of this. Are you using an older operating system?", score: 30 },
                    { text: "Our app is currently undergoing maintenance. It should be back up eventually.", score: 10 }
                ]
            },
            {
                customerText: "I've tried reinstalling twice! Nothing works. And I have a pending order I need to track!",
                options: [
                    { text: "Let me pull up your order status right now. I will also submit a high-priority bug report to our developers regarding the crash.", score: 100 },
                    { text: "I can check your order for you. Just provide the email associated with your account.", score: 50 },
                    { text: "You can track your order by logging into our website from a desktop computer instead of using the app.", score: 30 },
                    { text: "The development team is aware. You'll just have to wait for the next app update to roll out.", score: 10 }
                ]
            },
            {
                customerText: "Thanks for tracking it. But I rely on the app daily — when will it actually be fixed?",
                options: [
                    { text: "The bug report is filed. While I don't have an exact timeframe, I will personally email you as soon as the patch is released.", score: 100 },
                    { text: "Our team is working on it. You should see an update in the app store within the next week.", score: 50 },
                    { text: "I can't guarantee a timeline, but checking for updates daily is your best bet.", score: 30 },
                    { text: "I'm just in customer service, so I don't have visibility into the engineering team's schedule.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 17,
        title: 'Food Quality Complaint',
        customerName: 'Diana E.',
        customerEmoji: '🤢',
        situation: 'Customer received spoiled food in their grocery delivery order.',
        rounds: [
            {
                customerText: "The chicken in my grocery delivery was already expired! The sell-by date was TWO DAYS ago! This is a health hazard!",
                options: [
                    { text: "That is completely unacceptable, Diana. I am very sorry. Please safely dispose of the chicken immediately, and I will process a full refund.", score: 100 },
                    { text: "I apologize for the oversight. I will refund the cost of the chicken to your original payment method.", score: 50 },
                    { text: "I'm sorry about that. Our shoppers are usually very careful about checking dates.", score: 30 },
                    { text: "Are you sure it's spoiled? Sometimes the sell-by date is just a recommendation for peak freshness.", score: 10 }
                ]
            },
            {
                customerText: "Thankfully I checked before cooking. But I had to throw out the whole meal plan for tonight!",
                options: [
                    { text: "I realize this ruined your evening plans. In addition to the refund, I am adding a $25 credit to your account to help cover dinner tonight.", score: 100 },
                    { text: "I understand that is inconvenient. I can offer you a discount code for your next delivery order.", score: 50 },
                    { text: "I can schedule a redelivery of the chicken for tomorrow morning if you'd like.", score: 30 },
                    { text: "Unfortunately, I can only refund the exact items that were expired, not the rest of your meal plan.", score: 10 }
                ]
            },
            {
                customerText: "I appreciate the credit. But honestly, how can I trust the freshness of future deliveries?",
                options: [
                    { text: "I am submitting a formal report to the fulfillment center manager so the shopper can be retrained. We are committed to ensuring this doesn't happen again.", score: 100 },
                    { text: "I will pass your feedback along to our quality assurance team to improve our processes.", score: 50 },
                    { text: "This was an isolated incident. The vast majority of our deliveries have no issues.", score: 30 },
                    { text: "You can always leave a note on future orders reminding the shopper to double-check expiration dates.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 18,
        title: 'Account Hacked',
        customerName: 'Jason W.',
        customerEmoji: '😱',
        situation: 'Customer discovered unauthorized purchases on their account totaling $500.',
        rounds: [
            {
                customerText: "Someone hacked my account and ordered $500 worth of stuff I didn't buy! My payment info is in there! What do I do?!",
                options: [
                    { text: "I understand this is alarming, Jason. First, let's secure your account. I am freezing it right now so no further actions can be taken.", score: 100 },
                    { text: "I recommend you change your password immediately. Let me check the recent orders on your account.", score: 50 },
                    { text: "You should contact your credit card company right away to report the card as compromised.", score: 30 },
                    { text: "Are you sure someone in your household didn't place the orders by mistake?", score: 10 }
                ]
            },
            {
                customerText: "Please stop those orders! I can see they haven't shipped yet. And I want all my payment info removed!",
                options: [
                    { text: "I have successfully cancelled all unauthorized orders and wiped the payment methods from your profile. No funds will be captured.", score: 100 },
                    { text: "I cancelled the orders that haven't shipped yet. You can remove your payment info in your account settings.", score: 50 },
                    { text: "I will submit cancellation requests for those orders, but I cannot guarantee they won't ship.", score: 30 },
                    { text: "For security reasons, you have to log in and remove your own payment information.", score: 10 }
                ]
            },
            {
                customerText: "Thank you for acting fast. But how did this happen? Is my data safe?",
                options: [
                    { text: "We take this seriously. I'm escalating this to our cybersecurity team for investigation. I recommend enabling two-factor authentication when you regain access.", score: 100 },
                    { text: "Our systems are secure. It is likely your password was compromised on another website.", score: 50 },
                    { text: "I don't have access to security logs, so I can't tell you exactly how they gained access.", score: 30 },
                    { text: "You really need to make sure you use stronger passwords in the future to prevent this.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 19,
        title: 'Assembly Instructions',
        customerName: 'Greg N.',
        customerEmoji: '😩',
        situation: 'Customer bought a desk but the assembly instructions are in the wrong language and missing pieces.',
        rounds: [
            {
                customerText: "I spent $300 on a desk and the instructions are in German! Plus I'm missing 4 screws and a support beam! How am I supposed to build this?!",
                options: [
                    { text: "I apologize for the poor unboxing experience, Greg. I will email you the English instructions immediately and get those missing parts ordered.", score: 100 },
                    { text: "I'm sorry the parts are missing. Let me find the PDF of the English instructions for you.", score: 50 },
                    { text: "I can submit a request to the manufacturer for the missing parts, but it usually takes a week.", score: 30 },
                    { text: "The diagrams in the German manual should still be accurate enough to follow along visually.", score: 10 }
                ]
            },
            {
                customerText: "I need this desk for work on Monday. I can't wait a week for parts!",
                options: [
                    { text: "I understand the urgency. I am upgrading the parts shipment to overnight delivery so you will have everything by tomorrow.", score: 100 },
                    { text: "I will request expedited shipping on the replacement parts to get them to you as fast as possible.", score: 50 },
                    { text: "You could try finding similar screws at a local hardware store if you need it built by Monday.", score: 30 },
                    { text: "I cannot control the shipping speed of replacement parts. Standard delivery is the only option.", score: 10 }
                ]
            },
            {
                customerText: "Overnight shipping would be great. But this was supposed to be a simple purchase — I'm really disappointed.",
                options: [
                    { text: "You have every right to be disappointed. To make up for the hassle, I am applying a 15% partial refund to your original payment method.", score: 100 },
                    { text: "I completely understand. Hopefully, the overnight parts will allow you to finish it this weekend.", score: 50 },
                    { text: "I'll make sure to document your feedback regarding the missing parts and wrong manual.", score: 30 },
                    { text: "At least you'll have the parts soon. Building furniture is always a bit of a project.", score: 10 }
                ]
            }
        ]
    },
    {
        id: 20,
        title: 'Loyalty Points Missing',
        customerName: 'Olivia J.',
        customerEmoji: '😤',
        situation: 'Customer\'s 5,000 loyalty points disappeared from her account after a system update.',
        rounds: [
            {
                customerText: "All my loyalty points are GONE! I had 5,000 points saved up for a free item and now my balance shows zero! I've been collecting these for a year!",
                options: [
                    { text: "I understand how alarming that is, Olivia. Your points represent your loyalty to us. Let me investigate your account history to find them.", score: 100 },
                    { text: "I'm sorry your balance is showing zero. Let me look into the system to see what happened.", score: 50 },
                    { text: "We recently had a system update. Sometimes it takes a few hours for points balances to sync.", score: 30 },
                    { text: "Are you sure you didn't accidentally redeem them on your last purchase? Let me check.", score: 10 }
                ]
            },
            {
                customerText: "I definitely didn't redeem them! I was saving them for the holiday sale. Can you see what happened?",
                options: [
                    { text: "I found the issue. A technical glitch during our update temporarily hid them. I am manually restoring your 5,000 points right now.", score: 100 },
                    { text: "It looks like an error caused them to disappear. I will submit a ticket to have your points reinstated.", score: 50 },
                    { text: "I can see you earned them previously. They should reappear on their own within 24 hours.", score: 30 },
                    { text: "I will have to escalate this to our tech team. Point restorations can take a few weeks to process.", score: 10 }
                ]
            },
            {
                customerText: "Oh thank goodness! I was panicking!",
                options: [
                    { text: "I'm glad we could resolve this quickly! As an apology for the scare, I've added an extra 500 bonus points to your account. Enjoy the holiday sale!", score: 100 },
                    { text: "You're all set. The 5,000 points are back in your account and ready to be used.", score: 50 },
                    { text: "Glad we could get it sorted out. Just remember to use them before they expire next year.", score: 30 },
                    { text: "It's all fixed. Is there anything else you need help with today?", score: 10 }
                ]
            }
        ]
    }
];
