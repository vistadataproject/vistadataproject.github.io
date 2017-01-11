---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR YEAR END FOIA REPORT 

 property | value 
--- | --- 
 label | DSIR YEAR END FOIA REPORT
 tag | FOIA
 routine | [DSIROIR0](http://code.osehra.org/dox/Routine_DSIROIR0_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will collect the data for the year end FOIA report for VA Form0712.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| START DATE | LITERAL | 7 | true | The FileMan Format date to start the report.  Typically this will be October 1st of the previous year. | 
| END DATE | LITERAL | 7 | true | This is the end date for the report period.  Typically this will be September 30th of the current year. | 
| DIV | LITERAL | 99 | true | This is the list of internal division for the current user.multidivisional processing. | 
| QUICK | LITERAL | 1 | true | 0 - Calculate the report and save the results if report for a fiscal year1 - Return the stored results of the report for a fiscal year2 - Return the combined stored results and user add ins for a fiscal year | 