---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU16 USERINFO<br/>
# ORWU16 USERINFO

Returns information about the current user in the format:     DUZ^NAME^USRCLS^CANSIGN^ISPROVIDER^ORDERROLE^NOORDER^DTIME^CD

## Properties

Property | Value
--- | ---
Label | USERINFO
Routine | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [USERINFO^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | procedure
First Comment | {::nomarkdown}<pre><code> return DUZ^NAME^SIGNAUTH^ISPROVIDER for the current user<br/> I DUZ=1085 S DUZ=1298           ; CHANGE ID **** DON'T EXPORT ****</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=DUZ_U_$P(^VA(200,DUZ,0),U,1)<br/> S $P(Y,U,3)=$S($D(^XUSEC("ORES",DUZ)):3,$D(^XUSEC("ORELSE",DUZ)):2,$D(^XUSEC("OREMAS",DUZ)):1,1:0)<br/> S $P(Y,U,4)=$D(^XUSEC("PROVIDER",DUZ))#10</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}