---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU DEFAULT DIVISION<br/>
# ORWU DEFAULT DIVISION

Returns True or False for a user depending on default division information.

## Properties

Property | Value
--- | ---
Label | DEFDIV
MUMPS Implementation | [ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEFDIV^ORWU1](http://code.osehra.org/dox/Routine_ORWU1_source.html)
Method Comment | Return user&#x27;s default division, if specified.
First Comment | {::nomarkdown}<pre><code><br/> Variables used:<br/>   ORDD   = Default division.<br/>   ORDIV  = Division holder variable.<br/>   ORGOOD = Flag for successful default division found.<br/>   ORIEN  = IEN of user.<br/>   ORZ    = Memory array storage variable.<br/>   ORZERR = Error storage for LIST^DIC call.<br/>   Y      = Returned value.<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ORDD,ORDIV,ORGOOD,ORIEN,ORZ,ORZERR<br/> S ORIEN=DUZ,ORDIV=""<br/> S Y=0,(ORDD,ORGOOD)=0             ; Initialize variables.<br/> D LIST^DIC(200.02,","_ORIEN_",","@;.01;1","QP","","","","","","","ORZ","ORZERR")<br/> I $P(ORZ("DILIST",0),U)=0 Q       ; No Divisions listed.<br/> F  S ORDD=$O(ORZ("DILIST",ORDD)) Q:+ORDD=0!'($L(ORDD))  D  Q:ORGOOD<br/> .;<br/> .; See if current entry being processed is "Default" (done if so):<br/> .I $P(ORZ("DILIST",ORDD,0),U,3)["Y" S ORDIV=$P(ORZ("DILIST",ORDD,0),U,2),ORGOOD=1                      ; Division text.<br/> .;<br/> I (ORDIV="") Q                    ; Punt if no default division.<br/> I $$UP^XLFSTR(ORDIV)="SALT LAKE CITY OIFO" S Y=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fFrame.pas">fFrame.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}