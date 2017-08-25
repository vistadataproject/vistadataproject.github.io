---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; OR UNSIGNED ORDERS ON EXIT<br/>
# OR UNSIGNED ORDERS ON EXIT

This determines which unsigned orders view that holders of the ORES keywill see when exiting a patient&#x27;s chart; the Package default is to showMy Unsigned Orders, i.e. all unsigned orders that the current user eitherplaced or is the responsible provider for.  This may also be set to listonly those orders placed during the current session, or all unsigned ordersfor this patient regardless of provider.

## Properties

Property | Value
--- | ---
Summary | Unsigned Orders View on Exit
Value Type | set of codes
Value Domain | 0:NEW ORDERS ONLY;1:MY UNSIGNED ORDERS;2:ALL UNSIGNED ORDERS;
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
3 | SERVICE
5 | DIVISION
7 | SYSTEM
9 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}