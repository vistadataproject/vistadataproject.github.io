---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; TIU_Personal_Preferences-8926<br/>
<a name="top"></a>
# TIU Personal Preferences (8926)
This file allows the definition of Personal Preferences with respect to a variety of TIU's functions (e.g., Review Screen sort field and order, Default cosigner, default locations, location by day-of-week, suppression of review notes prompt on Progres note entry, etc.).

**Global:** ^TIU(8926,

**Domain:** Non-Clinical

## Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**User Name**{::nomarkdown}<pre><code>  user_name</code></pre>{:/} | .01 | This is the person whose preferences are represented by the record. | POINTER | INDEXED<br/>REQUIRED | [New_Person-200](New_Person-200)
**Default Location**{::nomarkdown}<pre><code>  default_location</code></pre>{:/} | .02 | This hospital location is presented to the user as the default location<br/>when the user enters outpatient TIU documents.  The location must be<br/>an active clinic and may not be an Occasion of Service location or a<br/>Disposition location. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)
**Review Screen Sort Field**{::nomarkdown}<pre><code>  review_screen_sort_field</code></pre>{:/} | .03 | This is the attribute by which the multiple patient documents review<br/>screen lists will be sorted for the current user.  In the absence of a<br/>specific entry, the list will be sorted by reference date. | ENUMERATION |  | {::nomarkdown}status: <em><strong>S</strong></em><br/>patient: <em><strong>P</strong></em><br/>completion date: <em><strong>C</strong></em><br/>author: <em><strong>A</strong></em><br/>expected cosigner: <em><strong>E</strong></em><br/>reference date: <em><strong>R</strong></em><br/>document type: <em><strong>D</strong></em>{:/}
**Review Screen Sort Order**{::nomarkdown}<pre><code>  review_screen_sort_order</code></pre>{:/} | .04 | This is the order in which the following review screen list(s) should be<br/>sorted according to the specified sort field (i.e., Ascending or<br/>Descending):<br/>   - multiple patient documents (several options)<br/>   - option Review Progress Notes [TIU OE/RR REVIEW PROG NOTES] <br/>The default will be ascending, with unsigned stat documents at the top<br/>of the list. | ENUMERATION |  | {::nomarkdown}descending: <em><strong>D</strong></em><br/>ascending: <em><strong>A</strong></em>{:/}
**Display Menus**{::nomarkdown}<pre><code>  display_menus</code></pre>{:/} | .05 | This field determines whether the menus for document type, search<br/>category, etc. should be automatically displayed (at least until you get<br/>to know them better). | BOOLEAN |  | {::nomarkdown}false: <em><strong>1</strong></em><br/>true: <em><strong>0</strong></em>{:/}
**Patient Selection Preference**{::nomarkdown}<pre><code>  patient_selection_preference</code></pre>{:/} | .06 | This determines whether the user will be prompted to select one<br/>patient at a time, or with the OE/RR patient look-up, which allows<br/>selection of a list of patients for iterative processing. | ENUMERATION |  | {::nomarkdown}single: <em><strong>S</strong></em><br/>multiple: <em><strong>M</strong></em>{:/}
**Ask &#x27;save Changes?&#x27; After Edit**{::nomarkdown}<pre><code>  ask_save_changes_after_edit</code></pre>{:/} | .07 | This parameter enables or disables the prompt (Save changes? YES//) on exit <br/>from your editor.  Enabling the prompt allows you to "abandon mistakes", and <br/>helps some users avoid the accidental storage (or potential loss) of data <br/>following editing of documents. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Ask Subject For Progress Notes**{::nomarkdown}<pre><code>  ask_subject_for_progress_notes</code></pre>{:/} | .08 | Enter YES if you want to be prompted for a SUBJECT when entering or<br/>editing a Progress Note.  Subject is a freetext, indexed field which may<br/>help you to find notes about a given topic, etc. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Default Cosigner**{::nomarkdown}<pre><code>  default_cosigner</code></pre>{:/} | .09 | This is the person whose name will appear as the default when you are <br/>prompted to name an expected cosigner for the Progress Notes which you<br/>author. | POINTER |  | [New_Person-200](New_Person-200)
**Number Of Notes On Rev Screen**{::nomarkdown}<pre><code>  number_of_notes_on_rev_screen</code></pre>{:/} | .1 | This determines the number of notes that will be included in your initial<br/>list when reviewing progress notes by patient. | NUMERIC |  | 
**Suppress Review Notes Prompt**{::nomarkdown}<pre><code>  suppress_review_notes_prompt</code></pre>{:/} | .11 | Allows user to specify whether to suppress the prompt to Review Existing<br/>Notes on entry of a Progress Note.  YES will SUPPRESS the prompt, while<br/>NO, or no entry will allow the site's default setting to take precedence. | BOOLEAN |  | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**Location By Day Of Week**{::nomarkdown}<pre><code>  location_by_day_of_week</code></pre>{:/} | 1 | This multiple provides a means of specifying the user's preferred location<br/>by day of week. | OBJECT |  | [Location_By_Day_Of_Week-8926_01](#Location_By_Day_Of_Week-8926_01)

## Sub-Files
### <a name="Location_By_Day_Of_Week-8926_01"></a>Location By Day Of Week (8926.01)

<dl>
<dt>ID</dt><dd>Location_By_Day_Of_Week-8926_01</dd></dl>

#### Properties

Field | ID | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Day Of Week**{::nomarkdown}<pre><code>  day_of_week</code></pre>{:/} | .01 | This is the day of week on which the user expects to serve patients at a<br/>particular location. | ENUMERATION | INDEXED<br/>REQUIRED | {::nomarkdown}MONDAY: <em><strong>2</strong></em><br/>TUESDAY: <em><strong>3</strong></em><br/>FRIDAY: <em><strong>6</strong></em><br/>WEDNESDAY: <em><strong>4</strong></em><br/>THURSDAY: <em><strong>5</strong></em><br/>SUNDAY: <em><strong>1</strong></em><br/>SATURDAY: <em><strong>7</strong></em>{:/}
**Hospital Location**{::nomarkdown}<pre><code>  hospital_location</code></pre>{:/} | .02 | This is the HOSPITAL LOCATION at which the user expects to see patient on<br/>the specified day of week. | POINTER |  | [Hospital_Location-44](Hospital_Location-44)

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:28 pm</p>{:/}