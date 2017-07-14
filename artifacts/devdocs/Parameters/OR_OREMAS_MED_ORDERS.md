---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OR OREMAS MED ORDERS<br/>
# OR OREMAS MED ORDERS

This parameter determines if clerks (i.e. users holding the OREMAS key)are allowed to act on medication orders. If set to YES, a clerk may enternew medication orders or DC these medication orders. Inpatient orders maybe released to the Pharmacy as &#x27;Signed on Chart&#x27;. Outpatient orders willrequire the physician&#x27;s signature. If set to UNRELEASED ONLY, a clerk mayonly enter unreleased orders for both Inpatient and Outpatient. If set toNO, a clerk is completely prohibited from handling medication orders.

## Properties

Property | Value
--- | ---
Summary | Allow Clerks to act on Med Orders
Value Type | set of codes
Value Domain | 0:NO;1:UNRELEASED ONLY;2:YES
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}