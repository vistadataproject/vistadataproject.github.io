---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ SAVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ SAVE{:/}
 tag | {::nomarkdown}EDAD{:/}
 routine | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Generic proceedure to add or edit a MH file entry  Input: YS(\FILEN\)=File Number          (i.e. the file# for administrations would be 601.84)        YS(\IEN\)= : the internal number of the record you want to edit.Leave blank if creating a new record. If creating a new record you mustsend .01^NEW for those MH files using the New input transform.        YS(1)=FIELD #^Value^[3rd piece is 1 if you need to bypass             validation (use only if approved by developer)        :        :        YS(x)=YS(1)=FIELD #^Value^[3rd piece] Output: YSDATA(1)=[DATA] or [ERROR]{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}