---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; TIU TEMPLATE ACCESS BY CLASS<br/>
# TIU TEMPLATE ACCESS BY CLASS

This parameter is used to specify access to personal templates for a specific user class.  A setting of READ ONLY allows the use of personal templates, but does not allow the creation of new personal templates.  To restrict template use by USER, DIVISION or SYSTEM, use theTIU PERSONAL TEMPLATE ACCESS parameter.  These two parameters work together, in the following precedence order: Precedence  Parameter----------  ----------------------------USER        TIU PERSONAL TEMPLATE ACCESSUSER CLASS  TIU TEMPLATE ACCESS BY CLASSLOCATION    TIU PERSONAL TEMPLATE ACCESSSERVICE     TIU PERSONAL TEMPLATE ACCESSDIVISION    TIU PERSONAL TEMPLATE ACCESSSYSTEM      TIU PERSONAL TEMPLATE ACCESS

## Properties

Property | Value
--- | ---
Summary | Personal Template Access by User Class
Value Type | set of codes
Value Domain | 0:FULL ACCESS;1:READ ONLY;2:NO ACCESS
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | SYSTEM

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}