---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU IS USER A USR PROVIDER<br/>
# TIU IS USER A USR PROVIDER

This Boolean RPC returns TRUE if the user was a member of USR CLASS PROVIDER on the date specified.

## Properties

Property | Value
--- | ---
Label | USRPROV
MUMPS Implementation | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the IEN of the user in the NEW PERSON FILE 200.  If no user is specified, DUZ (the current user of the software) is the default.
DATE | LITERAL |  | true | This is the date in internal FILEMAN format for which the user&#x27;s membership in USR CLASS PROVIDER is evaluated.  If no date is received, TODAY is the default. Date must be a strict date; time must NOT beincluded.



## MUMPS Method Description

Property | Value
--- | ---
Method | [USRPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
Method Comment | Is USER a USR CLASS provider?
Input Parameters | USER, DATE
First Comment | {::nomarkdown}<pre><code> Checks USR CLASS PROVIDER only<br/> DATE must not include time</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N TIUERR<br/> S USER=$G(USER,DUZ)<br/> S DATE=$G(DATE,DT),TIUY=0<br/> I +$$ISA^USRLM(USER,"PROVIDER",.TIUERR,DATE) S TIUY=1 ;  DBIA/ICR 2324</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}