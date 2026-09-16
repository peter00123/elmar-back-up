/**
 * Elmar Builders — Project data
 * -----------------------------
 * Add, edit or remove projects here. Both the home page ("Selected
 * projects") and the Projects page read from this one file, so you
 * only need to update information in a single place.
 *
 * status  : "completed" or "in-progress"
 * featured: set to true to show a project in the "Selected projects"
 *           section on the home page (keep this to 2 projects)
 * image   : path to a photo inside assets/images/projects/
 *
 * These entries are placeholders — replace the name, location and
 * image for each with real project details before launch.
 */

const PROJECTS = [
  {
    name: "Residence at Thiruvankulam",
    location: "Thiruvankulam, Ernakulam",
    type: "Residential",
    status: "completed",
    featured: true,
    image: "assets/8.jpg"
  },
  {
    name: "Villa at Piravom",
    location: "Piravom, Ernakulam",
    type: "Residential",
    status: "completed",
    featured: true,
    image: "assets/9.jpg"
  },
  {
    name: "Turnkey Residence, Kakkanad",
    location: "Kakkanad, Ernakulam",
    type: "Turnkey project",
    status: "in-progress",
    featured: false,
    image: "assets/images/projects/project-03.jpg"
  },
  {
    name: "Plot Development, Muvattupuzha",
    location: "Muvattupuzha, Ernakulam",
    type: "Land development",
    status: "in-progress",
    featured: false,
    image: "assets/images/projects/project-04.jpg"
  }
];
