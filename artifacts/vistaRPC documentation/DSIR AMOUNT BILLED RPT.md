---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR AMOUNT BILLED RPT 

 property | value 
--- | --- 
 label | DSIR AMOUNT BILLED RPT
 tag | AMTBILD
 routine | [DSIRBIR0](http://code.osehra.org/dox/Routine_DSIRBIR0_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns the data for the Amount Billed report.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Start Date | LITERAL | 7 | true | Pass in the FileMan format date to start the reporting period. | 
| End Date | LITERAL | 7 | true | Pass the FileMan format ending date for the reporting period.  This parameter will default to the current date. | 
| Divisions | LITERAL | 512 | true | This is a variable '^' delimited containing selected Divisions from whichthe user may see data. | 




 Generated on January 11th 2017, 7:15:04 am