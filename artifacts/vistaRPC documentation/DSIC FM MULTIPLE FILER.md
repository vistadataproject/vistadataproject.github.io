---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DSIC FM MULTIPLE FILER 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC FM MULTIPLE FILER{:/}
 tag | {::nomarkdown}MFILE{:/}
 routine | [DSICFM](http://code.osehra.org/dox/Routine_DSICFM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Calls DSIC FM FILER remote procedure code as often as necessaryto process multiple file or subfile x IENS combinations.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown} ;         LIST[#] = p1^p2^p3^p4^p5^p6 where ; ;         p1 - required when file or subfile changes ;              First record of each group relating to the same ;              file or subfile must specify the file or subfile ;              number in the first piece.  This value can be ;              omitted for subsequent records that pertain to ;              the same file or subfile. ;         p2 - required when IENS or file/subfile changes ;              First record of each group to be filed to the same ;              entry or subentry must specify the IENS. ;              This value can be omitted for subsequent ;              records that pertain to other fields in the same ;              entry. ;         p3 - FLAG - optional - only acceptable value is \T\ - ;              transaction processing, that is, all the fields must ;              be successfully updated or none are.  Applies to ;              the entire group of records for one file or subfile ;              number and IENS.  May be specified in any record of ;              the same group. ;         p4 - required - field # (Same as p1 in FILE^DSICFM) ;         p5 - optional - default value I (Same as p2 in FILE^DSICFM) ;              if p5=\\ then field value in internal format ;                   =\E\ then field value in external format ;                   =\I\ then field value in internal format ;                   =\W\ then field is a word processing ;                                  see notes for FILE^DSICFM ;         p6 - value for field# - if value is <null> or \@\ ;                        then field value will be deleted. ;                        (Same as p3 in FILE^DSICFM){:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}