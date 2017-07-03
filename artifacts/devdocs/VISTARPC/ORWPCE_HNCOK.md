---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWPCE HNCOK
# ORWPCE HNCOK

Returns TRUE if the Head and/or Neck Cancer patches have been installed

Property | Value
--- | ---
Label | HNCOK
Routine | [ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [HNCOK^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)
Method Comment | Returns true if Head and/or Neck Cancer is enabled
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I $$PATCH^XPDUTL("DG*5.3*397"),$$PATCH^XPDUTL("SD*5.3*244"),$$PATCH^XPDUTL("PX*1.0*111"),$$PATCH^XPDUTL("IVM*2.0*46") S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}