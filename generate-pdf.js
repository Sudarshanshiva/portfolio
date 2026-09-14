import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Letter size: 612 x 792 pt, margins: 36 pt (0.5 inch)
const doc = new PDFDocument({ margin: 36, size: 'LETTER' });
const pdfPath = path.join(publicDir, 'Sudarshan_Kumar_Resume.pdf');
const writeStream = fs.createWriteStream(pdfPath);
doc.pipe(writeStream);

const mainBlack = '#000000';
const linkBlue = '#0000EE';

// Header Name
doc.fillColor(mainBlack).fontSize(20).font('Helvetica-Bold').text('SUDARSHAN KUMAR', { align: 'center' });
doc.moveDown(0.3);

// Contact Line 1
doc.fontSize(9.5).font('Helvetica').fillColor(mainBlack).text('+916299146175  |  Hyderabad, India', { align: 'center' });
doc.moveDown(0.2);

// Contact Line 2 Links
doc.fontSize(9.5).fillColor(linkBlue).text('contactshiva403@gmail.com   |   linkedin.com/in/sudarshankumar   |   leetcode.com/sudarshankumar', { align: 'center' });
doc.moveDown(0.6);

function drawSectionHeader(title) {
  const currentY = doc.y;
  doc.strokeColor('#000000').lineWidth(0.8).moveTo(36, currentY).lineTo(576, currentY).stroke();
  doc.y = currentY + 4;
  doc.fillColor(mainBlack).fontSize(10.5).font('Helvetica-Bold').text(title.toUpperCase());
  doc.moveDown(0.3);
}

// OBJECTIVE
drawSectionHeader('OBJECTIVE');
doc.fillColor(mainBlack).fontSize(9.5).font('Helvetica').text(
  'Software Engineer with hands-on experience building, testing, and debugging Android and cross-platform applications using Kotlin, Jetpack Compose, and Flutter. Skilled in root-cause analysis, defect tracking, and troubleshooting across the development lifecycle. Delivered a production React-to-Flutter migration and contributed features across three live Android apps. Strong foundation in Data Structures & Algorithms, OOP, OS, and DBMS; SIH 2022 national hackathon winner.',
  { align: 'justify', lineGap: 2 }
);
doc.moveDown(0.6);

// EDUCATION
drawSectionHeader('EDUCATION');
const eduY = doc.y;
doc.fillColor(mainBlack).fontSize(9.5).font('Helvetica-Bold').text('Bachelor of Computer Science, Rungta College of Engineering and Technology', 36, eduY, { width: 440 });
doc.font('Helvetica').text('2021 - 2025', 476, eduY, { width: 100, align: 'right' });
doc.y = eduY + 22;
doc.moveDown(0.4);

// SKILLS
drawSectionHeader('SKILLS');
function renderSkillRow(label, text) {
  const startY = doc.y;
  doc.fillColor(mainBlack).fontSize(9.5).font('Helvetica-Bold').text(label, 36, startY, { width: 120 });
  doc.font('Helvetica').text(text, 160, startY, { width: 416, lineGap: 1.5 });
  doc.moveDown(0.2);
}

renderSkillRow('Languages', 'C, Dart, Java, Kotlin, SQL');
renderSkillRow('Framework', 'Flutter, Jetpack Compose, Java, Kotlin, SQL, Node Js, MongoDB, RoomDB, Firebase');
renderSkillRow('Operating System', 'Windows, Linux');
renderSkillRow('Tools', 'Android Studio, Postman, Visual Studio Code, NetBeans, Git & GitHub');
renderSkillRow('CS Fundamental', 'Data Structure and Algorithm (DSA), OOPs, OS, DBMS, Computer Network (CN)');
doc.moveDown(0.4);

// EXPERIENCE
drawSectionHeader('EXPERIENCE');
const exp1Y = doc.y;
doc.fillColor(mainBlack).fontSize(10).font('Helvetica-Bold').text('Junior Software Engineer', 36, exp1Y);
doc.fontSize(9.5).font('Helvetica').text('Sep 2025 - Aug 2026', 450, exp1Y, { width: 126, align: 'right' });

const exp2Y = doc.y;
doc.fontSize(9.5).font('Helvetica-Oblique').text('Vigocare', 48, exp2Y);
doc.font('Helvetica-Oblique').text('Hyderabad, India', 450, exp2Y, { width: 126, align: 'right' });
doc.moveDown(0.4);

const expBullets = [
  'Led the migration of a production application from React to Flutter using the BLoC architecture, delivering 30% of the codebase — UI screens, business logic, and state management — for a seamless cross-platform transition.',
  'Shipped new features, bug fixes, and performance improvements across three live Android applications using Kotlin, Jetpack Compose, and Flutter, reducing UI load latency and improving app stability.',
  'Partnered with cross-functional design, QA, and backend teams to ship high-quality, user-focused mobile applications on schedule, maintaining clean, maintainable, and scalable code.',
  'Debugged and resolved production issues through systematic root-cause analysis and profiling, improving app reliability and reducing crash reports.',
  'Tracked, documented, and prioritized defects using GitHub Issues, collaborating with developers to verify fixes before release.'
];

expBullets.forEach(bullet => {
  doc.fillColor(mainBlack).fontSize(9).font('Helvetica').text(`•   ${bullet}`, 48, doc.y, { width: 528, lineGap: 2 });
  doc.moveDown(0.25);
});
doc.moveDown(0.4);

// PROJECTS
drawSectionHeader('PROJECTS');
doc.fillColor(mainBlack).fontSize(10).font('Helvetica-Bold').text('DeveloperPR – AI-Powered GitHub Pull Request Code Reviewer & Developer Tool', 36);
doc.fontSize(9.5).font('Helvetica-Oblique').text('Flutter, Dart — ', 36, doc.y, { continued: true })
   .fillColor(linkBlue).text('GitHub', { link: 'https://github.com/Sudarshanshiva/DeveloperPR' });
doc.moveDown(0.3);

const proj1Bullets = [
  'Engineered an automated GitHub PR review tool in Flutter/Dart powered by an AI model, analyzing complex code diffs in real-time to detect security vulnerabilities, memory leaks, architectural risks, and test coverage gaps.',
  'Built a high-resilience networking & LLM parsing pipeline featuring dynamic AI model discovery, rate-limiting interceptors, exponential retries, and a custom fault-tolerant JSON repair engine to handle truncated LLM token streams gracefully.',
  'Architected a clean layered codebase using BLoC state management and the repository pattern, decoupling business logic from UI components to optimize cross-platform performance and deliver low-latency PR reviews.'
];

proj1Bullets.forEach(bullet => {
  doc.fillColor(mainBlack).fontSize(9).font('Helvetica').text(`•   ${bullet}`, 48, doc.y, { width: 528, lineGap: 2 });
  doc.moveDown(0.25);
});
doc.moveDown(0.3);

doc.fillColor(mainBlack).fontSize(10).font('Helvetica-Bold').text('EPFO (Employees\' Provident Fund Organisation) Related Issue', 36);
doc.fontSize(9.5).font('Helvetica-Oblique').text('Java, Node.js, MongoDB — Smart India Hackathon 2022, 1st Place (IIT Dhanbad)', 36);
doc.moveDown(0.3);

doc.fillColor(mainBlack).fontSize(9).font('Helvetica').text('•   Designed and built a full-stack application to streamline EPFO (Employees\' Provident Fund Organisation) grievance handling and improve accessibility for end users.', 48, doc.y, { width: 528, lineGap: 2 });
doc.moveDown(0.5);

// EXTRA-CURRICULAR ACTIVITIES
drawSectionHeader('EXTRA-CURRICULAR ACTIVITIES');
const extraBullets = [
  'Became the Winner of Smart India Hackathon 2022 at IIT Dhanbad.',
  'Participated in IDE (Innovation Design and Entrepreneurship) Bootcamp at IIT Bhubaneswar.',
  'Solved 450+ problems on LeetCode and 100+ on CodeChef, strengthening core DSA and problem-solving skills.'
];

extraBullets.forEach(bullet => {
  doc.fillColor(mainBlack).fontSize(9).font('Helvetica').text(`•   ${bullet}`, 48, doc.y, { width: 528, lineGap: 2 });
  doc.moveDown(0.25);
});

doc.end();

writeStream.on('finish', () => {
  console.log('PDF regenerated with clean layout!');
});
