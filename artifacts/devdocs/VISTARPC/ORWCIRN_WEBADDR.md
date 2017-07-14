---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWCIRN WEBADDR<br/>
# ORWCIRN WEBADDR

Get VistaWeb Web Address.

## Properties

Property | Value
--- | ---
Label | WEBADDR
Routine | [ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [WEBADDR^ORWCIRN](http://code.osehra.org/dox/Routine_ORWCIRN_source.html)
Method Comment | Get VistaWeb Address
Input Parameters | PATID
Code | {::nomarkdown}<pre><code> S ORY=$$GET^XPAR("ALL","ORWRP VISTAWEB ADDRESS",1,"I")<br/> I ORY="" S ORY="https://vistaweb.domain.ext" Q<br/> I ORY="https://vistaweb.domain.ext" Q<br/> S ORY=ORY_"?q9gtw0="_$P($$SITE^VASITE,"^",3)_"&xqi4z="_PATID_"&yiicf="_DUZ</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}