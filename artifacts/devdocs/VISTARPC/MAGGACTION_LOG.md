---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGGACTION LOG<br/>
# MAGGACTION LOG

Call from Delphi to log an action performed on the image. Actions are logged the IMAGE ACCESS LOG file  ^MAG(2006.95

## Properties

Property | Value
--- | ---
Label | LOGACT
MUMPS Implementation | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 245 | true | &#x27;^&#x27; delimited string contains the following:&#x27;^&#x27; piece     description   1   ACCESS TYPE -  A|B|C|D|E   2   USER        -  DUZ   3   IMAGE       -  MAGIEN   4   USER INTERFACE SOFTWARE   - STRING   5   PATIENT     -  DFN   6   IMAGE COUNT   7   ADDITIONAL DATA



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}