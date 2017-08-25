---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RMPR NPPD LIST<br/>
# RMPR NPPD LIST

GUI REMOTE PROCEDURE, LIST NPPD DATA         ;RESULTS passed to broker in ^TMP($J,        ;delimited by "^"        ;piece 1 = ENTRY DATE        ;piece 2 = PATIENT NAME        ;piece 3 = PSAS HCPCS with * if hcpcs has Calculation Flag        ;piece 4 = QTY        ;piece 5 = VENDOR        ;piece 6 = INITIAL ACTION DATE        ;piece 7 = TOTAL COST        ;piece 8 = DESCRIPTION        ;piece 9 = INITIATOR        ;piece 10 = NPPD LINE BEFORE GROUPER        ;piece 11 = STATION        ;piece 12 = GROUPER NUMBER        ;piece 13 = FORM REQUESTED ON        ;piece 14 = TYPE OF TRANSACTION        ;piece 15 = SSN        ;piece 16 = IEN TO FILE 660        ;piece 17 = HCPCS SHORT DESCRIPTION        ;piece 18 = SOURCE

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [RMPR9LNP](http://code.osehra.org/dox/Routine_RMPR9LNP_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATE1 | LITERAL | 50 | true | The Fileman date to start the query.  The begining date.
DATE2 | LITERAL | 50 | true | The Fileman date to end the query.  The ending date.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}