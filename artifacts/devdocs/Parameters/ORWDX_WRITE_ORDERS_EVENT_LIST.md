---
layout: default
title: Parameters
---

## [Parameters](TableOfContents) &#8594; ORWDX WRITE ORDERS EVENT LIST
# ORWDX WRITE ORDERS EVENT LIST

This parameter is used to identify a menu in the ORDER DIALOG file thatwill be used as the list of items that may be selected in the Write Orderslistbox of the CPRS GUI when placing orders that are to be delayed untilthe selected EVENT occurs.

Property | Value
--- | ---
ID | 201
Summary | Menu for Write Orders List by Event
Value Type | pointer
Value Domain | 101.41
Multiple Instances | true

### Allowable Entities

Precedence | Entity
--- | ---
2 | USER
4 | LOCATION
5 | SERVICE
7 | DIVISION
8 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:01 pm</p>{:/}