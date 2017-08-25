---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORB DELETE MECHANISM<br/>
# ORB DELETE MECHANISM

Set of codes used to determine how a notification will be deleted at asite.  Codes include: I (Individual Recipient): delete the notificationfor  an individual recipient when a) that individual completes thefollow-up  action on notifications with associated follow-up action,  b)that  individual reviews notifications without follow-up actions.  A (AllRecipients): delete the notification for all recipients when a) anyrecipient completes the follow-up action on notifications with follow-upactions,  b) any recipient reviews notifications without follow-upactions.

## Properties

Property | Value
--- | ---
Summary | Delete Mechanism
Value Type | set of codes
Value Domain | I:Individual Recipient;A:All Recipients
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | DIVISION
2 | SYSTEM
3 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:40 pm</p>{:/}