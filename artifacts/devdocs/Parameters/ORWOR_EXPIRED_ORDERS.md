---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORWOR EXPIRED ORDERS<br/>
# ORWOR EXPIRED ORDERS

Number of hours back in time to search for expired orders.  Also used to determine number of hours back in time to search for expired med orders ifthe follow-up action for the Expiring Meds alert does not find expiringmeds.This parameter does NOT affect Meds tab display.  To alter Meds tab display, please adjust the ORCH CONTEXT MEDS parameter accordingly.

## Properties

Property | Value
--- | ---
Summary | Hours to find recently expired orders
Value Type | numeric
Value Domain | 0:100000:0
Multiple Instances | false

## Allowable Entities

Precedence | Entity
--- | ---
3 | SYSTEM
4 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}