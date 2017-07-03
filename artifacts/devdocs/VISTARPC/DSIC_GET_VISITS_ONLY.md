---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC GET VISITS ONLY
# DSIC GET VISITS ONLY

Using SELECTED^VSIT this retrieves all visits for the date range.

Property | Value
--- | ---
Label | VST
Routine | [DSICVT0](http://code.osehra.org/dox/Routine_DSICVT0_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 12 | true | This is the pointer value to the Patient file
BEG | LITERAL | 14 | true | Optional - this is the starting date for the search in internal filemandate/time format of the visit.  If not passed, then a date of T-365 willbe used.
END | LITERAL | 14 | true | Optional - this is the ending date/time for the search in internal filemanformat.  If not passed, then a date of DT+.5 will be used.
ZLOC | LIST | 15 | true | Kept for backward compatibility.  Do not use.  See SCR parameter. Optional - you can look for visits for specific locations (file 44).  TheZLOC array is expected to be in the format ZLOC(ien)&#x3D;&quot;&quot; where ien is thepointer to file 44.
CAT | LITERAL | 1 | true | This flag controls whether service categories should be screened or not.It is optional, the default value is to screen entries. I +CAT then do not screen entries.I &#x27;$G(CAT) then screen entries to exclude those whose service category isE,D,X,N, or C
SCR | LIST | 250 | true | SCR - optional - added 7/3/2002 - sgm      passed by reference      format:  SCR(subscript) &#x3D; code ^ value   where               code &#x3D; C for hospital location #44                      D for medical center division #40.8                      S for 3-digit stop code from file 40.7 (not ien)               value &#x3D; for codes C,D - any unique lookup value or ien                       for code S - 3-digit stop code (not ien to 40.7)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}