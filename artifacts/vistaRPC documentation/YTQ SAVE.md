---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ SAVE 

 property | value 
--- | --- 
 label | YTQ SAVE
 tag | EDAD
 routine | [YTQAPI1](http://code.osehra.org/dox/Routine_YTQAPI1_source.html)
 return value type | ARRAY
 description | Generic proceedure to add or edit a MH file entry  Input: YS(\FILEN\)=File Number          (i.e. the file# for administrations would be 601.84)        YS(\IEN\)= : the internal number of the record you want to edit.Leave blank if creating a new record. If creating a new record you mustsend .01^NEW for those MH files using the New input transform.        YS(1)=FIELD #^Value^[3rd piece is 1 if you need to bypass             validation (use only if approved by developer)        :        :        YS(x)=YS(1)=FIELD #^Value^[3rd piece] Output: YSDATA(1)=[DATA] or [ERROR]




 ###### Generated on January 11th 2017, 6:39:43 am