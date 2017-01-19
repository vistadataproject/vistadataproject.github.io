---
layout: default
title: VDM documentation
---

## [VDM](TableOfContent.md) &#8594; Problem_List_Site_Parameters-125_99 

 property | value 
--- | --- 
 id | Problem_List_Site_Parameters-125_99
 fmId | 125.99
 label | Problem List Site Parameters
 location | ^GMPL(125.99,
 description | {::nomarkdown}This file controls the behavior of the Problem List application for each<br/>site where it is installed.<br/>  <br/>There should be only one entry in this file!!{:/}

### Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| number | .001 | Number | {::nomarkdown}This is the internal number of this file entry.{:/} | IEN |  |  |  | 
| name | .01 | Name | {::nomarkdown}This is the name of the site, commonly HOSPITAL or VAMC.{:/} | STRING |  | REQUIRED, INDEXED |  | 
| verify_transcribed_problems | 1 | Verify Transcribed Problems | {::nomarkdown}This is a toggle which determines whether the PL application will<br/>flag entries made by a non-clinical user, and allow for subsequent<br/>confirmation of the entry by a clinician.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>0</dt><dd>false</dd><dt>1</dt><dd>true</dd></dl>{:/} | 
| prompt_for_chart_copy | 2 | Prompt For Chart Copy | {::nomarkdown}This is a toggle which determines whether the PL application will<br/>prompt the user to print a new chartable copy of the patient's list<br/>when exiting the application or changing patients, if the current<br/>patient's list has been modified.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>1</dt><dd>YES, ASK</dd><dt>0</dt><dd>NO, DON'T ASK</dd></dl>{:/} | 
| use_clinical_lexicon | 3 | *use Clinical Lexicon | {::nomarkdown}***This field is marked for deletion in preparation for the Problem<br/>List Data Standardization project and will be deleted 18 months from<br/>the release of patch GMPL*2*36.*** <br/> <br/>This is a toggle which determines whether the PL application will <br/>allow the user to search the Clinical Lexicon when adding or editing <br/>a problem; if a term is selected from the CL Utility, the standardized<br/>text will be displayed on the problem list, otherwise the text entered<br/>by the user to search on will be displayed.  Problems which are taken<br/>from the CLU may already be coded to ICD9, and this code is returned <br/>to the PL application if available.  Duplicate problems can be screened<br/>out, and searches by problem performed when this link to the CLU exists.<br/> <br/>If this flag is set to NO, the user will be prompted for his/her free<br/>text description of the problem only, when adding or editing a problem.<br/>No search will be performed at that time on the CLU, and no link made<br/>from the problem to an entry in the CLU.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl></dl>{:/} | 
| display_order | 4 | Display Order | {::nomarkdown}This flag allows each site to control how the problem list is displayed,<br/>whether chronologically or reverse-chronologically by date recorded.<br/>This ordering will be the same both onscreen and on the printed copy.<br/>When new problems are added to a patient's list, they will be added as the<br/>most recent problems, i.e. at the top of the list if reverse-chronological<br/>or at the bottom if chronological.{:/} | ENUMERATION |  |  | {::nomarkdown}<dl><dt>R</dt><dd>REVERSE-CHRONOLOGICAL</dd><dt>C</dt><dd>CHRONOLOGICAL</dd></dl>{:/} | 
| screen_duplicate_entries | 6 | Screen Duplicate Entries | {::nomarkdown}If YES is entered in this field duplicate problems (those having the same <br/>ICD9 code) will NOT be added to the problem list.  The primary purpose of<br/>this field in to screen entries added via the scannable encounter form.{:/} | BOOLEAN |  |  | {::nomarkdown}<dl><dt>1</dt><dd>true</dd></dl>{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 7:54:22 am</p>{:/}