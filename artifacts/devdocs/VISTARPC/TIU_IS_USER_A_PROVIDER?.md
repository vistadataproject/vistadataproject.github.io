---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU IS USER A PROVIDER?<br/>
# TIU IS USER A PROVIDER?

This Boolean RPC returns TRUE if the user was a known provider on the date specified.

## Properties

Property | Value
--- | ---
Label | ISAPROV
Routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | Optional pointer to the NEW PERSON FILE (#200). If user is unspecified the current user will be assumed.
DATE | LITERAL |  | true | Optional FileMan formatted date (time). If none is provided the current date is assumed.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ISAPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Is user a provider?
Input Parameters | USER, DATE
First Comment | {::nomarkdown}<pre><code> Checks USR CLASS PROVIDER AND 200 Person Class<br/> DATE must not include time (for ISA^USRLM)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S USER=$G(USER,DUZ)<br/> S DATE=$G(DATE,DT)<br/> S TIUY=$$PROVIDER^TIUPXAP1(USER,DATE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}