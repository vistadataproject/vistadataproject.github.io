---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIF INP EDIT ROC<br/>
# DSIF INP EDIT ROC

This RPC duplicates the logic of the FBCH EDIT ROC input template.

## Properties

Property | Value
--- | ---
Label | ROCEDIT
Routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 99 | true | Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5)
DATA | LIST | 255 | true | DATA(n)&#x3D;&quot;Field^Value&quot;File 161.5 MUST match #162.2 5       TYPE OF CONTACT: telephone// 6.5     PHONE # OF PERSON CONTACTED: 7       STREET ADDRESS[1] OF CONTACT: 8       STREET ADDRESS[2] OF CONTACT: 9       CITY OF CONTACT: 10      STATE OF CONTACT: 11      ZIP CODE OF CONTACT: 12      ATTENDING PHYSICIAN: GONE// 13      ATTEND.PHYSICIAN TELEPHONE NO.: 16      MODE OF TRANSPORTATION: AMBULANCE//   (Ien of file #392.4)16.5    VETERAN HAVE OTHER INSURANCE: NO// 17      Select DATE/TIME OF CONTACT: JAN 30,1994@13:39// 18      APPROVING OFFICIAL:   (if present ien of file #200)NARR    narrative fields, which must be preceded by line number piece        ex) NARR^1^THIS IS LINE 1            NARR^2^THIS IS LINE 2 (all are option, but some must exist)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}