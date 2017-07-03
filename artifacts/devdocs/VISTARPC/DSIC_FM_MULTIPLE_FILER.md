---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIC FM MULTIPLE FILER
# DSIC FM MULTIPLE FILER

Calls DSIC FM FILER remote procedure code as often as necessaryto process multiple file or subfile x IENS combinations.

Property | Value
--- | ---
Label | MFILE
Routine | [DSICFM](http://code.osehra.org/dox/Routine_DSICFM_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LIST | 245 | true |  ;         LIST[#] &#x3D; p1^p2^p3^p4^p5^p6 where ; ;         p1 - required when file or subfile changes ;              First record of each group relating to the same ;              file or subfile must specify the file or subfile ;              number in the first piece.  This value can be ;              omitted for subsequent records that pertain to ;              the same file or subfile. ;         p2 - required when IENS or file/subfile changes ;              First record of each group to be filed to the same ;              entry or subentry must specify the IENS. ;              This value can be omitted for subsequent ;              records that pertain to other fields in the same ;              entry. ;         p3 - FLAG - optional - only acceptable value is &quot;T&quot; - ;              transaction processing, that is, all the fields must ;              be successfully updated or none are.  Applies to ;              the entire group of records for one file or subfile ;              number and IENS.  May be specified in any record of ;              the same group. ;         p4 - required - field # (Same as p1 in FILE^DSICFM) ;         p5 - optional - default value I (Same as p2 in FILE^DSICFM) ;              if p5&#x3D;&quot;&quot; then field value in internal format ;                   &#x3D;&quot;E&quot; then field value in external format ;                   &#x3D;&quot;I&quot; then field value in internal format ;                   &#x3D;&quot;W&quot; then field is a word processing ;                                  see notes for FILE^DSICFM ;         p6 - value for field# - if value is &lt;null&gt; or &quot;@&quot; ;                        then field value will be deleted. ;                        (Same as p3 in FILE^DSICFM)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}